require('dotenv').config()
var mongoose = require('mongoose');

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

/**
 * User Schema
 */
var _schema = new Schema({
    playerTag: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    },
    numberOfGames: {
        type: Number,
        default: 0
    },
    numberOfWins: {
        type: Number,
        default: 0
    },
    liberals: {
        type: Number,
        default: 0
    },
    facists: {
        type: Number,
        default: 0
    },
    hitler: {
        type: Number,
        default: 0
    }
},
{ timestamps: true });


module.exports = mongoose.model('User', _schema);
