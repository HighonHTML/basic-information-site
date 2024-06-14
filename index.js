const fs = require("fs");
const http = require("http");

const index = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const about = fs.readFileSync(`${__dirname}/about.html`, "utf-8");
const contactMe = fs.readFileSync(`${__dirname}/contact-me.html`, "utf-8");
const error = fs.readFileSync(`${__dirname}/404.html`, "utf-8");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(index);
  }
  if (req.url === "/about") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(about);
  }
  if (req.url === "/contact-me") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(contactMe);
  }
  res.writeHead(404, {
    "Content-type": "text/html",
  });
  res.end(error);
});

const port = 8080;

server.listen(port, () => {
  console.log("server has started");
});
