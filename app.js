const express = require("express");
const app = express();
// const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", (req, res) => {
  res.send("log in post");
});

app.post("/register", (req, res) => {
  res.send("register post");
});

app.get("/protected", (req, res) => {
  res.send("Protected");
});

app.listen(3030, (req, res) => {
  console.log("Listening to port 3030");
});
