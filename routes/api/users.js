// requires modules & set up router object
const router = require('express').Router();
// require the controller
const usersCtrl = require('../../controllers/users');
// define a signup and login route
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
// export your router
module.exports = router;