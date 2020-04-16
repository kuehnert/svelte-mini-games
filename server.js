const path = require("path");
const express = require("express");
const app = require("./public/build/App.js");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("*", function(req, res) {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Seven Block-Based Games with Svelte</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
    <link rel='stylesheet' href='/global.css'>
    <link rel='stylesheet' href='/build/bundle.css'>
    <div id="app">${html}</div>
    <script src="/build/bundle.js"></script>
  `);

  res.end();
});

const port = 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
