
const ansyncHandler = require("express-async-handler");

const registerUser = ansyncHandler (async (req, res) => {
    res.json({message: "Register User"});
});


const loginUser = ansyncHandler (async (req, res) => {
    res.json({message: "Login User"});
});

const currentUser = ansyncHandler (async (req, res) => {
    res.json({message: "Current user information"});
});



module.exports = {registerUser, loginUser, currentUser};