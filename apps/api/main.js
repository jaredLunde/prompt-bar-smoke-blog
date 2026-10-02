const http = require("http");
const port = process.env.PORT || 8080;
http
  .createServer((_req, res) => {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ ok: true }) + "\n");
  })
  .listen(port, "0.0.0.0", () => console.log(`api listening on ${port}`));
