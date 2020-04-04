var Player = require("../models/Player");

modules.exports = function(app) {
    app.get('/getPlayersList', function(req, res) {
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
                    status: 'error',
                    data: players,
                    message: "Successfully retrieved all players"
                });
            }
        });
    });
};