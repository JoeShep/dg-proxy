"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 6060;
app.set("port", port);
const request = require("request");

// MIDDLEWARE (transform stream)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/instagram", (req, res) => {
  res.status(200).json({"id": "f8aa933dbe9944ac8414d87ff6129cf5"})
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
