const bcrypt = require("bcrypt");
const ansyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = ansyncHandler (async (req, res) => {
    const {username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mendatory!");
    } else {
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            res.status(400);
            throw new Error("User already registered!");
        }else{
            const hashedPassword = await bcrypt.hash(password, 10);
            //console.log("Password: ", password);
            //console.log("Hashed password: ", hashedPassword);
            const user = await User.create({
                username,
                email,
                password: hashedPassword,
            });
            console.log(`User Created: ${user}`);
            if (user) {
                res.status(201).json({ _id: user.id, email: user.email, });
            }else{
                res.status(201);
                throw new Error("User data is not valid");
            }
            res.json({message: "Register User"});        
        }
    }

});


const loginUser = ansyncHandler (async (req, res) => {
    res.json({message: "Login User"});
});

const currentUser = ansyncHandler (async (req, res) => {
    res.json({message: "Current user information"});
});



module.exports = {registerUser, loginUser, currentUser};