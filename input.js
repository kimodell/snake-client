const { keyMap } = require("./constants");

//Function to handle keyboard inputs by user for moving or exiting the game
const handleUserInput = function(data) {
  //Pressing ctrl + c in the terminal sends an "End of Text" character, indicating we should exit application
  if (data === '\u0003') {
    process.exit();
    //Look up other mapped keys in keyMap and send the command assoicated with the mapped key to the server
  } else if (keyMap[data]) {
    connection.write(keyMap[data]);
  }
};

let connection;

// Setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//Export to play.js
module.exports = {
  setupInput,
};