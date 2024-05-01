var express = require("express");
const http = require("http");
const { Server } = require("socket.io");
var app = express();
require("./dbconnection");
var port = process.env.port || 3040;
let routes = require("./routers/router");
const { Socket } = require("dgram");
const { randomInt } = require("crypto");
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

//io request
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const number = randomInt(0, 100);
  console.log(number);
  socket.on("message from the frontend:", (message) => {
    console.log("message from the frontend:", message);
  });
});

server.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});
