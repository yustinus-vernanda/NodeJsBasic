const express = require('express')
const {getPost,createPost} = require('../controller/post')
const validator = require('../validator')

const router = express.Router()

router.get("/",getPost)
router.post("/post", validator.createValidator, createPost)

module.exports = router
