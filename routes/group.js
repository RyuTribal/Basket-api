var express = require('express');
var router = express.Router();
var controller = require('../controllers/group');

router.post('/post', controller.groupPost);
router.post('/get', controller.groupGet);
router.get('/length', controller.groupAmmount);

module.exports = router;