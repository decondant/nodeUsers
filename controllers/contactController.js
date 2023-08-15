  
const ansyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//desc get all contacts
//route get api/contacts
//access public

const getContacts = ansyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createContact = ansyncHandler ( async (req, res) => {
    console.log("The request body is:", req.body);   
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required!")   
    }
    const contact = await Contact.create({
        name, email, phone,
    });
    res.status(201).json(contact);
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