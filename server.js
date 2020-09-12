// import

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;


// initialize 
const app = express();


// middleware and body parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use routes for API and view
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

app.listen(PORT, function() {
    console.log(`Server Listening on Port: ${PORT}`)
});