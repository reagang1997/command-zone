const router = require('express').Router();
const { User } = require("../../models");
const passport = require('../../config/passport');


//get user
router.get('/', (req, res) => {
    console.log('hit');
    res.status(200).send({ message: 'All clear' });
})

//create a new user
router.post('/', async (req, res) => {
    const newUser = req.body;
    const newDBUser = await User.create(newUser);
    req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.displayName = newUser.displayName;
    });
    res.send(newDBUser);
});

//login
router.post('/login',passport.authenticate('local'), async (req, res) => {
    res.send(req.user);
});

module.exports = router;