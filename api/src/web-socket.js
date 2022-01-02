const { io } = require("./http");

const users = [];

const messages = [];

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("connect_user", (data, callback) => {
    const userExists = users.find((user) => user.username === data.username);
    console.log(data);

    if (userExists) {
      userExists.socket_id = socket.id;
    } else {
      users.push({
        username: data.username,
        socket_id: socket.id,
      });
    }

    callback && callback(messages);
  });

  socket.on("message", (data) => {
    const message = {
      username: data.username,
      text: data.message,
      createdAt: new Date(),
    };
    messages.push(message);
    io.emit("message", message);
  });
});
