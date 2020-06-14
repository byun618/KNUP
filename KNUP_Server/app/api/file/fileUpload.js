const express = require('express')
const router = express.Router()
const models = require('../../models')
const multer = require('multer')
const mkdirp = require('mkdirp')
const file = require('./file')

models.Code.findAll().then( (result) => {

  var arr = []
  var validCode
  
  /* DB에서 code 리스트들을 뽑아서 리스트로 만든후 중복 제거 후 생성 및 디비에 저장 */
  for(var i = 0; i < result.length; i++) {
      arr.push(result[i].dataValues.code)
  }
  do {
      validCode = Math.floor(Math.random() * 1000000)
  } while(!notSame(validCode))

  models.Code.create({
    code: validCode
  }).catch( (err) => {
    console.log(err)
  })
  
  let folder = 'uploads/' + validCode
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      mkdirp(folder, (err) => {
        if(err)
        console.log(err)
      })

      cb(null, folder)
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })

  var upload = multer({storage: storage})

  router.post('/', upload.array('userfile'), file.upload)
  
  function notSame(n) {
      return arr.every((e) => n !== e)
  }
})

module.exports = router

