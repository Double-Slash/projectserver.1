var express = require('express');
var path = require('path');
var multer = require('multer');
var router = express.Router();


var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'data/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
var upload = multer({storage: storage});

router.get('/', function(req, res){
    res.send("image!");
});

router.get('/get/:picId', function(req, res){
    var picId = path.parse(req.params.picId).base;
    var img = `<img src="/${picId}" style="width:300px; display:block; margin-top:10px;"></img>`;
    res.send(img);
});

router.post('/put', upload.single('file'),function(req, res){
    res.send('Uploaded!: '+ req.file);
    console.log(req.file);
});

module.exports = router;
