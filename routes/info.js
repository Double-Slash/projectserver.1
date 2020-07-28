var express = require('express'); 
var router = express.Router();

var bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'info' });
}); 
 
router.get('/search', function(req, res, next) {
    res.render('info', { title: 'search' });
});


router.get('/get', function(req, res, next) {
    res.render('info', { title: 'get' });
});


router.get('/all', function(req, res, next) {
    var array = ['aa', 'bb', 'cc', 'dd'];
    res.render('result_page', { title: 'Express', id: array, method: "post" });
});


 
 /* POST */
router.post('/search', function(req, res, next) {
    var id = req.body.id;
    var check = "NO";
    var array = ['aa', 'bb', 'cc', 'dd'];

    for(var i = 0; i<array.length; i++){
    	if(id == array[i]){
    		check = "YES";
    	}
    }

    console.log(check); 
    res.render('result_page', { title: 'Express', id: check, method: "post" });
});


router.post('/get', function(req, res, next) {
    var id = req.body.id;
    var check = "{name:'NO'}";
    var array = ['aa', 'bb', 'cc', 'dd'];

    for(var i = 0; i<array.length; i++){
    	if(id == array[i]){
    		check = "{name:'" + id + "'}";
    	}
    }

    console.log(check); 
    res.render('result_page', { title: 'Express', id: check, method: "post" });
});


module.exports = router;

