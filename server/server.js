const express = require("express");
const mongoose = require("mongoose");

const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
const routes = require('./routes');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
}
else {
    app.use(express.static("public"));
}






app.use(routes);


// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtg-lifecounter", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
