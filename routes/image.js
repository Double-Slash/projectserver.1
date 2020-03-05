var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('image', { title: 'image' });
  
  res.send('<img src="public/images/image.png">');

});

module.exports = router;