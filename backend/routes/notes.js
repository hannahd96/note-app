const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
    Note.find()
    // find all notes and return them as json
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));

});
// Create Note
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const content = req.body.content;
    
    const newNote = new Note({
        username,
        title,
        content,
    });

    newNote.save()
        .then(() => res.json('Note added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// View Note
router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Note
router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json('Note deleted'))
        .catch(err => res.status(400).json('Error: ' + err));      
});

// Update Note
router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        note.username = req.body.username;
        note.title = req.body.title;
        note.content = req.body.content;

        note.save()
            .then(() => res.json('Note updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;