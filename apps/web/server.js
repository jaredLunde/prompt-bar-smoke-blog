const http = require("http");
const port = process.env.PORT || 8080;
http
  .createServer((_req, res) => res.end("web: ok\n"))
  .listen(port, "0.0.0.0", () => console.log(`web listening on ${port}`));
