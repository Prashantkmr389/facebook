var express = require('express');
var router = express.Router();
const home_controller = require('../controllers/home_controller');
// for users
router.use('/user', require('./users'));

// for posts

router.use('/post', require('./posts'));

/* GET home page. */
router.get('/', home_controller.home);



module.exports = router;
