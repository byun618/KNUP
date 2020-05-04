const models = require('../../models');
const crypto = require('crypto');

exports.index = (req, res) => {
    models.User.findAll().then( results => {
        if(!results.length)
            res.status(404).json({ err: 'There is no user to show' });
        else
            res.json(results);
    }).catch( () => res.status(404).json({ err: 'Undefined error!' }));
}

exports.sign_up = (req, res) => {
    let body = req.body;
    
    res.json(body);
    // let inputPassword = body.user_pwd;
    // let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    // let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    // models.User.create({
    //     user_id: body.user_id,
    //     user_pwd: hashPassword,
    //     user_name: body.user_name,
    //     salt: salt
    // }).then( () => {
    //     res.status(201).json({result: 'Success'}); 
    // }).catch( () => {
    //     res.status(404).json({err: 'Undefined Errors'});
    // });
    
}

exports.login = (req, res) => {
    let body = req.body;

    models.User.findOne({
        where: {
            user_id: body.user_id
        }
    }).then( (result) => {
        let db_pwd = result.user_pwd;
        let input_pwd = body.user_pwd;
        let salt = result.salt;
        let hashPassword = crypto.createHash("sha512").update(input_pwd + salt).digest("hex");

        if(db_pwd === hashPassword){
            /* Cookie */
            // res.cookie('user', body.user_id, {
            //     expires: new Date(Date.now() + 100000),
            //     httpOnly: true
            // });

            req.session.user_id = body.user_id;

            res.redirect('/');
            //res.json({result: "Success"});
          }
          else{
            res.json({result: "Login failed"});
          }
    }).catch( () => {
        res.status(404).json({ err: 'Undefiend error!' });
    });
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.clearCookie('sid');
  
    res.redirect("/");
}
