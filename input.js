//function to handle keyboard inputs by user

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up")
  }
  if (data === 'a') {
    connection.write("Move: left")
  }
  if (data === 's') {
    connection.write("Move: down")
  }
  if (data === 'd') {
    connection.write("Move: right")
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