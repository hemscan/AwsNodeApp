
// Import Third Party Node Packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extends:true}));

// Import All Routes Here
const UserRoute = require("./Router/users");

// Set user Route Here
app.use("/user/",UserRoute);

// Set 404 Error Start Here
app.use((req, res, next)=>{
    res.status(404).send("<h1>404 Not Found</h1>")
});





app.listen(3000);

