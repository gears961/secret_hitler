require('dotenv').config()

var Player = require("../models/Player");
var uniqid = require('uniqid');
const bcrypt = require('bcryptjs');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
const salt = bcrypt.genSaltSync(15);

module.exports = function(app) {
    app.get('/api/getPlayersList', function(req, res) {
        Player.find({}, function(err, players) {
            if (err) {
                res.status(400)
                    .json({
                        status: 'error',
                        data: {},
                        message: err
                });
            } else {
                res.status(200)
                .json({
                    status: 'success',
                    data: players,
                    message: "Successfully retrieved all players"
                });
            }
        });
    });

    app.post('/api/createPlayer', function(req, res) {
        var newPlayer = new Player({
            playerId: uniqid(),
            playerName: req.body.playerName,
            password: bcrypt.hashSync(req.body.password, salt)
        });

        newPlayer.save(function(err, player) {
            if (err) {
                res.status(400)
                    .json({
                        status: 'error',
                        data: {},
                        message: err
                    });
            } else {
                res.status(202)
                    .json({
                        status: 'success',
                        data: player.playerId,
                        message: "Player " + player.playerName + " added"
                    });
            }
        });
    });

    app.post('/api/updatePlayer', function(req, res) {
        var filter = {playerId: req.body.id};
        var updateValues = req.body.values;
        Player.findOneAndUpdate(filter, updateValues, function(err, player) {
            if (err) {
                res.status(400)
                .json({
                    status: 'error',
                    data: {},
                    message: err
                });
            } else {
                res.status(200)
                .json({
                    status: 'success',
                    data: player,
                    message: "Successfully updated " + player.playerName
                });
            }
        });
    });

    app.delete('/api/deletePlayer', function(req, res) {
        Player.findOneAndDelete({playerId: req.body.id}, function(err, player) {
            if (err) {
                res.status(400)
                .json({
                    status: 'error',
                    data: {},
                    message: err
                });
            } else {
                res.status(200)
                .json({
                    status: 'success',
                    data: player,
                    message: "Successfully deleted " + player.playerName
                });
            }
        });
    });

};