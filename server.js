const express = require("express");
const mongoose = require("mongoose");

const users = require("./routers/api/users");
const profile = require("./routers/api/profile");
const post = require("./routers/api/post");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connect"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//Use routers
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running ${port}`));
