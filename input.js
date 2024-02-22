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
}

//function to handle keyboard inputs by user, including exiting the game with ctrl + c and all actions mapped to keys in the keyMap object

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (keyMap[data]) {
    connection.write(keyMap[data]);
  }
};

let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//export to play.js
module.exports = {
  setupInput,
}