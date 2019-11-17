// Express router
const router = require('express').Router();
let User = require('../models/user.model');

// First endpoint
router.route('/').get((req, res) => {
    // gets list of all users from mongodb
    User.find()
        // returns users in json format
        .then(users => res.json(users))
        // if theres an error, return status 400
        .catch(err => res.status(400).json('Error: ' + err));
});

// handles http POST request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    // create a new instance of user
    const newUser = User({username});
    // save new user to mongodb 
    newUser.save()
        // return message in json
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
// export router
module.exports = router;