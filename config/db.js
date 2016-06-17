var db = require('mongoose');
db.connect('mongodb://tworns:<PASSWORD>@ds017544.mlab.com:17544/mega-player-sersver');
module.exports = db;
