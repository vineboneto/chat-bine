const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");

const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({ ok: "Hello World", port: process.env.PORT || 5000 });
});

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

module.exports = {
  io,
  serverHttp,
};
