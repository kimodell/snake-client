//module containing constant values which are exported for use in the rest of the app

const IP = "localhost";

const PORT = 50541;

//Object storing mutiple mapped keys 

const keyMap = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
  'g': "Say: GG WP",
  'e': "Say: Sorry N00b",
  'r': "Say: Maybe practice first",
  'f': "Say: GLHF",
};

module.exports = {
  IP,
  PORT,
  keyMap
};