const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');

const passport = require('./config/passport');

const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
}
else {
    app.use(express.static("public"));
}








mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/the-command-zone", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
