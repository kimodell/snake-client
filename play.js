//import connect function from client.js
const { connect } = require("./client");
//import setupInput function from input.js
const { setupInput } = require("./input");

// Store the connection object returned by connect in a variable
const conn = connect();

// Pass the connection object to setupInput
setupInput(conn);