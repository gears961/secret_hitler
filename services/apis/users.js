require('dotenv').config()

var Users = require("../models/User");
var General = require("../models/User");
const withAuth = require('./middleware');
const bcrypt = require('bcryptjs');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


function encode(email) {
    if (!email) return "";
    return cryptr.encrypt(email);
}

function decode(email) {
    if (!email) return "";
    return cryptr.decrypt(email);
}

function createSession(email, req, res, data) {
    var emailhash = encode(email);
    
    const token = jwt.sign({emailhash}, process.env.SECRET, {
        expiresIn: 60*60*100
    });

    collectStats((err, d) => {
        data.totalUsers = d.length;
        return res.cookie('token', token, { httpOnly: true }).status(200).json(data);
    });
    
}

function killSession(req, res) {
    // kill session
    
    // const token = jwt.sign('invalid', process.env.SECRET, {
    //     expiresIn: 0*60*60*100
    // });
    return res.clearCookie("token").sendStatus(200);
}

function login(err, data, password, req, res) {
    if (!err && data) {
        var user = {
            playerTag: data.playerTag,
            verified: data.verified
        };
        if (verifyPass(data, password)) return createSession(data.email, req, res, user);
        else res.status(401).json({ error: 0, msg: "Incorrect Password" });
    } 
    else return res.status(401).json({ error: 1, msg: "Email does not exists" });
}


function verifyPass(data, password) {
    if (!data || !password) return false;
    return bcrypt.compareSync(password, data.password);;
}

function findByEmail(email, callback) {
    Users.findOne({email: email}, callback);
}

function getAll(callback) {
    Users.find({}, callback);
}

function verifyEmail(email, callback) {
    Users.updateOne({ email: email }, { $set: { verified: true } }, callback);
}

function generateVerificationToken(email) {
    var date = new Date();
    var toEncode = "verification/"+email+"/"+date;
    return Buffer(toEncode, 'ascii').toString('base64');
}

function verificationTokenValid(email, token) {
    if (!token) return false;

    var data = Buffer(token, 'base64').toString('ascii').split("/");
    if (data.length != 3) {
        return false;
    }
    else {
        return (email === data[1] && Math.ceil((new Date() - new Date(data[2])) / (1000*60*60)) <= 72);
    }
}

function sendEmail(email, token, req) {
    var transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: process.env.MAIL_USER, 
            pass: process.env.MAIL_PASS 
        } 
    });

    var mailOptions = { 
        from: 'no-reply@shgang.com', 
        to: email, 
        subject: 'Account Verification Token', 
        text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/verify\/?token=' + token + '\n\nBest,\nSecret Hitler Gang\n' 
    };

    transporter.sendMail(mailOptions, function (err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        res.status(200).send('A verification email has been sent to ' + email + '.');
    });
}

function createUser(data, callback) {
    var salt = bcrypt.genSaltSync(15);
    var pass = bcrypt.hashSync(data.password, salt);
    var user = {
        email: data.email,
        playerTag: data.playerTag,
        password: pass
    };
    Users.create(user, callback);
}

function collectStats(callback) {
    getAll(callback);
}

module.exports = function(app) {

    // Authentication
    app.post('/api/playAsGuest', (req, res) => {
        var formData = req.body;
        return createSession("guest."+formData.playerTag, req, res, {playerTag: formData.playerTag});
    });

    app.post('/api/signup', (req, res) => {
        var formData = req.body;
        findByEmail(formData.email, (err, data) => {
            if (err || !data) {
                // email doesn't exist we are good
                createUser(formData, (err, data) => {
                    if (err) return res.status(400).json({error: err, msg:"Failed to create user."});
                    else return createSession(formData.email, req, res, {playerTag: formData.playerTag});
                });
            } 
            else {
                return res.status(401).json({ error: 1, msg: "Email exists" });
            }
        });
    });

    app.post('/api/signout', (req, res) => {
        return killSession(req, res);
    });

    app.post('/api/signin', (req, res) => {
        const {email, password} = req.body;

        findByEmail(email, (err, data) => {
            return login(err, data, password, req, res);
        });
    });

    app.get('/api/checkToken', withAuth, function(req, res) {
        var token = req.headers.cookie.split("=")[1];
        var decoded = jwt.verify(token, process.env.SECRET);
        var email = decode(decoded.emailhash);

        if (email.startsWith("guest.")) {
            var playerTag = email.split(".")[1];
            var verified = true;
            collectStats((err, data) => {
                return res.status(200).json({
                    playerTag: playerTag,
                    verified: verified,
                    totalUsers: data.length
                });
            });
        } 
        else {
        
            findByEmail(email, function(err, data) {
                var playerTag = data.playerTag;
                var verified = data.verified;
                collectStats((err, data) => {
                    return res.status(200).json({
                        playerTag: playerTag,
                        verified: verified,
                        totalUsers: data.length
                    });
                });
            });
        }
    });

    app.post('/api/sendVerification', (req, res) => {
        var token = req.headers.cookie.split("=")[1];
        var decoded = jwt.verify(token, process.env.SECRET);
        var email = decode(decoded.emailhash);

        sendEmail(email, generateVerificationToken(email), req);

        return res.status(200).json({ msg: 'success' });
    });

    app.post('/api/verifyEmail/:token', (req, res) => {

        if (!req.params.token) return res.status(401).json({ error: 1, msg: "Token expired or Invalid token!" });

        var data = Buffer(req.params.token, 'base64').toString('ascii').split("/");

        if (verificationTokenValid(data[1], req.params.token)) {
            verifyEmail(data[1], (err, data) => {
                if (err) {
                    return res.status(401).json({ error: 1, msg: "Could not verify email!" });
                }
                else {
                    return res.status(200).json({ msg: "success" }); 
                }
            });
        }
        else {

            return res.status(401).json({ error: 1, msg: "Token expired or Invalid token!" });
        }
    });

};