const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routers/api/users");
const profile = require("./routers/api/profile");
const post = require("./routers/api/posts");

const app = express();

// body parser middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connect"))
//   .catch((err) => console.log(err));

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello"));

//Passport
app.use(passport.initialize());

//config passport
require("./config/passport")(passport);

//Use routers
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", post);

//If in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running ${port}`));
