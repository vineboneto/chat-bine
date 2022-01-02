require("dotenv/config");
const { serverHttp } = require("./src/http");
require("./src/web-socket");

const port = process.env.PORT || 5000;

serverHttp.listen(port, () =>
  console.log(`Server started at http://localhost:${port}/`)
);
