var _ = require('underscore');
var db = require('./db');

var settingsCache;
function cache(settings) {
    settingsCache = settings;
}

module.exports = {
    getSettings: function(callback) {
        if(settingsCache) {
            return callback(settingsCache);
        }

        db.getConnection(function(connection) {
            var sql = 'SELECT * FROM colors ORDER BY name';
            connection.query(sql, function(colorsErr, colorRows) {
                if(colorsErr) {
                    throw colorsErr;
                }
                var interiorColors = [];
                var exteriorColors = [];
                _.each(colorRows, function(color) {
                    if(color.type === 'exterior') {
                        exteriorColors.push(color);
                    }
                    else {
                        interiorColors.push(color);
                    }
                });
                var settings = {
                    interiorColors: interiorColors,
                    exteriorColors: exteriorColors
                };

                connection.query('SELECT * FROM models ORDER BY name', function(modelsErr, modelsRows) {
                    if(modelsErr) {
                        throw modelsErr;
                    }

                    settings.models = modelsRows;
                    cache(settings);
                    callback(settings);
                });
            });
        });
    }
};