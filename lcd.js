#!/usr/local/bin/node
var five = require("johnny-five"), board, lcd;
board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    pins: [8, 9, 4, 5, 6, 7],
    backlight: 10,
    rows: 2,
    cols: 16
  });

  lcd.cursor(0, 0);
  lcd.clear();
  lcd.print("NodeJS loves").cursor(1, 0).print("    Arduino!");

});
