var express = require('express');
var qs = require('querystring');
var router = express.Router();

var users = [];

function make_user(input_name){
    user = {
        name: input_name
    };
    return user;
};

users.push(make_user('a'));
users.push(make_user('b'));
users.push(make_user('c'));
users.push(make_user('d'));

router.get('/', function(req, res){
    res.send('INFO!');
});

router.post('/search', function(req, res){
    var user = req.body.name;
    console.log(user)
    var flag = true;
    for(i in users){
        if(users[i].name == user){
            res.send("YES")
            flag = false;
            break;
        }
    }
    if(flag){
        res.send("NO")
    }
});

router.post('/get', function(req, res){
    var user = req.body.name;
    var flag = true;
    for(i in users){
        if(users[i].name == user){
            res.send(users[i])
            flag = false;
            break;
        }
    }
    if(flag){
        res.send(make_user("NO"));
    }
});

router.get('/all', function(req, res){
    res.send(users);
});

module.exports = router;
