require('dotenv').config()
var mongoose = require('mongoose');
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

/**
 * Game Schema
 */
var generalSchema = new Schema({
    
    numUsers: {
        type: Number,
        min: 0,
        default: 0
    },
    liberalPoliciesEnacted: {
        type: Number,
        default: 0
    },
    fascistPoliciesEnacted: {
        type: Number,
        default: 0
    },
    policiesEnacted: {
        type: Number,
        default: 0
    },
    liberalWins: {
        type: Number,
        default: 0
    },
    fascistWins: {
        type: Number,
        default: 0
    }
},
{ timestamps: true });

module.exports = mongoose.model('General', generalSchema);