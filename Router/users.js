const express = require("express");
const router = express.Router();

// Create User Route Start Here

router.post("/add-user/",(req , res , next)=>{
    res.json(req.body);
});

// Create User Route End Here

// Fetch All users Router Start Here
router.get("/users/",(req,res,next) => {
    res.send("<h1>Users List</h1>");
});
// Fetch All Users Router End Here 


module.exports = router;