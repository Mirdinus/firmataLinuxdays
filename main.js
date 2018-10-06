#!/usr/local/bin/node
var five = require("johnny-five"), board, lcd;
board = new five.Board();

const actions = require("./actions");

board.on("ready", function() {

  //Switch to define actions that are goint to be called
  function activate() {
    switch(active) {
      case "up":
        actions.up(lcd);
        break;
      case "wait":
        actions.wait(lcd);
        break;
      case "right":
        actions.right(lcd);
        break;
      case "left":
        actions.left(lcd);
        break;
      case "down":
        actions.down(lcd);
        break;
      case "select":
        setTimeout(function(){ activate(); }, 200);
        break;
    }
  }

  //Init of LCD - all pins are board specific
  lcd = new five.LCD({
    pins: [8, 9, 4, 5, 6, 7],
    backlight: 10,
    rows: 2,
    cols: 16
  });

  //--------------Buttons-setup
  var pin = new five.Pin("A0");
  var active = "wait";
  var state = -1;
  var buttons = {
    131 : "up",
    0 : "right",
    307 : "down",
    476 : "left",
    719 : "select",
  }

  //--------------Loop-cycle
  this.loop(100, function() {
    pin.read(function(error, value) {
      if(state != value & value != 1023 & buttons[value] !== undefined) {
        state = value;
        active = buttons[value];
        activate();
      }
    });
  });

  //Just run wait as first action
  lcd.cursor(0, 0);
  lcd.clear();
  actions.wait(lcd);

});

