const net = require("net");

//establishes connection with gamer server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    //code that does something when the connection is first established
    console.log("Successfully connected to game server!");
    const message = "Name: KMO"
    conn.write(message);
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
connect();

//export to play.js
module.exports = {
  connect,
}