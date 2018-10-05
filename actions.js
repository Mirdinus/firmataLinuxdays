var secrets = require('./secrets.json');
var ip = require('ip');
const request = require('request');

function up(lcd) {
  lcd.clear().cursor(0,0).print(" IP address is");
  lcd.cursor(1,0).print(ip.address());
}
exports.up = up;

function down(lcd) {
  request('https://api.darksky.net/forecast/' + secrets.dark + '/50.0595854,14.3255428?units=ca', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    lcd.clear().cursor(0,0).print("Weather now");
    lcd.cursor(1,0).print(body.currently.summary + " temp " + body.currently.temperature);
  });
}
exports.down = down;

function right(lcd) {
  lcd.clear().cursor(0,0).print("Your turn");
  lcd.clear().cursor(1,0).print("Code few lines");
}
exports.right = right;

function left(lcd) {
  lcd.clear().cursor(0,0).print("Your turn");
  lcd.clear().cursor(1,0).print("Code few lines");
}
exports.left = left;


function wait(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for comm");
}
exports.wait = wait;
