function up(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for command");
}

exports.up = up;

function down(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for command");
}

exports.down = down;

function right(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for command");
}
exports.right = right;

function left(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for command");
}
exports.left = left;


function wait(lcd) {
  console.log("Waiting for command");
  lcd.clear().cursor(0,0).print("Waiting for command");
}
exports.wait = wait;
