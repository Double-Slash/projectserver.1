var express = require('express');
var path = require('path');
var multer = require('multer');
var fs = require('fs');
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
    res.send("video!");
});

router.get('/get/:videoName', function(req, res){
    var videoName = path.parse(req.params.videoName).base;
    console.log(videoName);
    fs.readFile(`./data/${videoName}`, function(err, data){
        console.log(data);
        res.end(data);
    });
});

router.post('/put', upload.single('videoId'),function(req, res){
    res.send('Uploaded!: '+ req.file);
    console.log(req.file);
});


module.exports = router;
