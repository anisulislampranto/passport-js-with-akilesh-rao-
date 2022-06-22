const { hashSync } = require("bcrypt");
const express = require("express");
const app = express();
// const ejs = require("ejs");
const { UserModel, connectMongoose } = require("./config/database");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  const user = new UserModel({
    username: req.body.username,
    password: hashSync(req.body.password, 10),
  });

  user.save().then((user) => console.log(user));

  res.json("success");
});

app.get("/protected", (req, res) => {
  res.send("Protected");
});

app.listen(3030, (req, res) => {
  console.log("Listening to port 3030");
});
