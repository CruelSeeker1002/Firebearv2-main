const express = require("express");
const path = require('path');
const app = express();
const port = 8001;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
});
app.get("/login", function(req, res) {
    res.sendFile(__dirname + "/public/html/login.html");
});
app.get("/aboutus", function(req, res) {
    res.sendFile(__dirname + "/public/html/aboutus.html");
});
app.get("/search", function(req, res) {
    res.sendFile(__dirname + "/public/html/search.html");
});

app.listen(process.env.PORT || port, function() {
    console.log(`Server started on http://localhost:${port}`);
});