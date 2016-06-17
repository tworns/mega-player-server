var db = require('../config/db');
var PlayerSchema = db.Schema({
  name:String,
  max_hp:String,
  xp:String,
  weapon:String,
  jewlery:String,
  wepMod:String,
  jewel: String,
  updated_at:{type:Date,default:Date.now}
});
var Player = db.model('Player',PlayerSchema);
module.exports = Player;
