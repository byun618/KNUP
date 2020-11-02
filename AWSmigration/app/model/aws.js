const AWS = require('aws-sdk')
const config = require('../../bin/config').aws

AWS.config = new AWS.Config(config)

const s3 = new AWS.S3()

var aws = {}
aws.s3 = s3

module.exports = aws
