const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const morgan = require("morgan");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const passport = require("passport");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch(err => console.log(err));

// Passport middleware

app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);

// Profile Routes

app.use("/api/profile", profile);

// Posts Routes

app.use("/api/posts", posts);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ---- ${port}`));
