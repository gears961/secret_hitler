var mongoose = require('mongoose');

/**
 * Player Schema
 */
var playerSchema = new mongoose.Schema({
    playerId: {
        type: Number,
        required: true,
        unique: true
    },
    playerName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    team: {
        type: String,
        enum: ["fascist", "liberal"],
        default : "fascist"
    },
    isHitler:  {
        type: Boolean,
        default: false
    },
    // I don't know if this field is necessary
    currentAction: {
        type: String,
        enum: ["Idle",
         "Choosing Chancellor",
          "Discarding Policy",
           "Choosing Policy",
           "Requesting Veto",
           "Accepting Veto",
           "Revealing Top Cards",
           "Choosing Player to Kill"
        ],
        default: "Idle"
    },
    isAlive: {
        type: Boolean,
        default: true
    }
});

playerSchema.index({ playerId: 1 }, {unique: true});

module.exports = mongoose.model('Player', playerSchema);
