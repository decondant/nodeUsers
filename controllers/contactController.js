   
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
        throw new Error("All fields are required!");   
    }
    const contact = await Contact.create({
        name, email, phone,
    });
    res.status(201).json(contact);
});

const getContact = ansyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
        res.status(200).json(contact);
    }

    res.status(404);
    throw new Error("Contact not found!");    
 
});

const updateContact = ansyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        //process.exit(1);
   //     console.log("Error");
        throw new Error("Contact not found!");
    }
     const updatedContact = await Contact.findByIdAndUpdate(
         req.params.id,
         req.body,
         {new: true}
     );
    res.status(200).json(updatedContact);
});

const deleteContact = ansyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        //process.exit(1);
   //     console.log("Error");
        throw new Error("Contact not found!");
    }
    await Contact.remove();    
    res.status(200).json(contact);
});



module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };