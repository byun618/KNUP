const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, '.env') });
const env = process.env

// Web Configure
web = {}
web.development = {}
web.development.host = env.DEVHOST + ":" + env.PORT
web.development.port = env.PORT
web.deployment = {}
web.deployment.host = env.DEPHOST
web.deployment.port = env.PORT

// DB Configure
db = {}
db.development = {}
db.development.username = env.DBDEVUSERNAME
db.development.password = env.DBDEVPASSWORD
db.development.database = env.DBDEVDATABASE
db.development.host = env.DBDEVHOST
db.development.dialect = env.DBDIALECT
db.development.operatorAliases = env.DBOPERATORALIASES
db.deployment = {}
db.deployment.username = env.DBDEPUSERNAME
db.deployment.password = env.DBDEPPASSWORD
db.deployment.database = env.DBDEPDATABASE
db.deployment.host = env.DBDEPHOST
db.deployment.dialect = env.DBDIALECT
db.deployment.operatorAliases = env.DBOPERATORALIASES

// AWS Configure
aws = {}
aws.development = {}
aws.development.bucket = env.AWSBUCKETNAME
aws.development.region = env.AWSREGION
aws.deployment = {}
aws.deployment.bucket = env.AWSBUCKETNAME
aws.deployment.region = env.AWSREGION

// Kakao Configure
kakao = {}
kakao.development = {}
kakao.development.rest_api_key = env.KAKAKORESTAPIKEY
kakao.development.redirect_uri = web.development.host + env.KAKAOREDIRECTURI
kakao.development.token_uri = env.KAKAOAUTHHOST + env.KAKAOTOKENURI
kakao.development.user_uri = env.KAKAOAPIHOST + env.KAKAOUSERURI
kakao.development.logout_uri = env.KAKAOAPIHOST + env.KAKAOLOGOUTURI
kakao.development.unlink_uri = env.KAKAOAPIHOST + env.KAKAOUNLINKURI
kakao.deployment = {}
kakao.deployment.rest_api_key = env.KAKAKORESTAPIKEY
kakao.deployment.redirect_uri = web.deployment.host + env.KAKAOREDIRECTURI
kakao.deployment.token_uri = env.KAKAOAUTHHOST + env.KAKAOTOKENURI
kakao.deployment.user_uri = env.KAKAOAPIHOST + env.KAKAOUSERURI
kakao.deployment.logout_uri = env.KAKAOAPIHOST + env.KAKAOLOGOUTURI
kakao.deployment.unlink_uri = env.KAKAOAPIHOST + env.KAKAOUNLINKURI

var config = {}
if (env.VERSION == "development") {
    config.web = web.development
    config.db = db.development
    config.kakao = kakao.development
    config.aws = aws.development
} else if (env.VERSION == "deployment") {
    config.web = web.deployment
    config.db = db.deployment
    config.kakao = kakao.deployment
    config.aws = aws.deployment
}

module.exports = config
