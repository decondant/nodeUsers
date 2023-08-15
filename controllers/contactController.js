  
const ansyncHandler = require("express-async-handler");

//desc get all contacts
//route get api/contacts
//access public

const getContacts = ansyncHandler (async (req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

const createContact = ansyncHandler ( async (req, res) => {
    console.log("The request body is:", req.body);   
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required!")   
    }
    res.status(201).json({message: "Create contact"});
});

const getContact = ansyncHandler ( async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

const updateContact = ansyncHandler ( async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

const deleteContact = ansyncHandler ( async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});



module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };