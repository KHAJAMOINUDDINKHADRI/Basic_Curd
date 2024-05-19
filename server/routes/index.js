const router = require('express').Router();
const createUser = require('./createUser');
const getUsers = require('./getUsers');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');


router.use('/newUser', createUser);
router.use('/getUsers', getUsers);
router.use('/updateUser', updateUser);
router.use('/deleteUser', deleteUser);

module.exports = router;