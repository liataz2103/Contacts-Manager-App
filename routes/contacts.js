const express = require('express');
const router = express.Router();

// @route GET api/contatcs 
// @desc Get all users contacts (each user is associated with its contacts)
// @access Private 

router.get('/', (req, res) => {
    res.send("Get all contacts");
});

// @route POST api/contatcs 
// @desc Add new contact
// @access Private 

router.post('/', (req, res) => {
    res.send("Add contact");
});

// @route PUT api/contatcs/:id
// @desc Update contact
// @access Private 

router.put('/:id', (req, res) => {
    res.send("Update contatc");
});

// @route DELETE api/contatcs/:id
// @desc Delete contact
// @access Private 

router.delete('/:id', (req, res) => {
    res.send("Delete contatc");
});

module.exports = router;