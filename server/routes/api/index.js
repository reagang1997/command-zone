const router = require('express').Router();
const userRoutes = require('./User.js');

router.use('/user', userRoutes);

module.exports = router;