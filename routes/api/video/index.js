const router = require('express').Router()
const controller = require('./video.controller')

router.post('/get', controller.get)


module.exports = router