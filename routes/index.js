const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
