const net = require("net");

//establishes connection with gamer server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    //code that sends a message when the connection is first established
    console.log("Successfully connected to game server!");
    //code that communicates with server to display player initials
    conn.write("Name: KMO");
    //conn.write("Move: up");
    //conn.write("Move: down");
    //conn.write("Move: left");
    //conn.write("Move right");
  });

  //handle data from the server code and display the message to the console
  conn.on("data", (data) => {
    console.log(data);
  });


  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("connecting ...");


//export connect function to play.js
module.exports = {
  connect,
}