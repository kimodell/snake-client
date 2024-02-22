const net = require("net");
const { IP, PORT } = require("./constants");

//Function that establishes connection with gamer server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    //Code that sends a message when the connection is first established
    console.log("Successfully connected to game server!");
    //Code that communicates with server to display player initials
    conn.write("Name: KMO");
  });

  //Handle data from the server code and display the message to the console
  conn.on("data", (data) => {
    console.log(data);
  });


  //Interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("connecting ...");


//Export connect function 
module.exports = {
  connect,
};