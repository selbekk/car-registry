var _ = require('underscore');
var db = require('./db');

module.exports = {
    getDefaults: function(callback) {
        db.getConnection(function(connection) {
            connection.query('SELECT type, setting FROM carsettings  ORDER BY setting', function(err, rows) {
                if(err) {
                    throw err;
                }

                var settings = {};

                _.each(rows, function(row) {
                    if(!settings[row.type]) {
                        settings[row.type] = [];
                    }
                    settings[row.type].push(row.setting);
                });

                callback(settings);
            });
        });
    }
};