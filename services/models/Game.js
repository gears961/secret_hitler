require('dotenv').config()
var mongoose = require('mongoose');
var Player = require("./Player.js")
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

/**
 * Game Schema
 */
var gameSchema = new Schema({
    code: {
        type: String,
        unique: true,
        required: true
    },
    players:  [Player],
    numPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    liberalPoliciesEnacted: Number,
    fascistPoliciesEnacted: Number,
    electionFailureCount: {
        type: Number,
        min: 0,
        max: 3
    },
    president: Player,
    chancellor: Player,
    currentPlayer: Player,
    presidentPower: {
        type: String,
        enum: ["None, Investigate", "Inspect Cards", "Kill", "Veto"],
        default: "None"
    }
},
{ timestamps: true });

module.exports = mongoose.model('Game', gameSchema);