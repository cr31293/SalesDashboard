const express = require("express");
const session = require("express-session");
const routes = require('./routes');
const passport = require('./config/passport');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Session to track login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose
  .connect(
    process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.ftj0e.mongodb.net/salesdashboard?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, function () {
      console.log(`API server now listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
