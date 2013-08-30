var express = require("express");
var app = express();

app.use(express.static(__dirname+"/static",{maxAge:0}));

app.listen(process.env.PORT || 3000);