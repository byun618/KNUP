const models = require('../../models');

exports.index = (req, res) => {
    models.Test.findAll().then((results) => {
        if(!results.length)
            res.status(404).json({err: 'There is no data to display'});
        else
            res.json(results);
    }).catch(() => res.status(404).json({ err: 'Undefiend error!' }));
};

exports.show = (req, res) => {
    var id = parseInt(req.params.id, 10);

    if(!id){
        return res.status(400).json({err: 'Incorrect id'});
    }

    models.Test.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if(!user){
            return res.status(404).json({err: 'No User'});
        }
        return res.json(user);
    }).catch(() => res.status(404).json({ err: 'Undefiend error!' }));
};

exports.destroy = (req, res) => {
    var id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({err: 'Incorrect id'});
    }

    models.Test.findOne({
        where : {
            id: id
        }
    }).then(user => {
        if(!user){
            return res.status(404).json({err: 'User was not found'});
        }
        models.Test.destroy({
            where: {
                id: id
            }
        }).then(() => res.status(204).json({res: 'Success'}))
        .catch(() => res.status(404).json({err: 'Undefined error'}));
    })
};

exports.create = (req, res) => {
    var title = req.body.title || '';

    if(!title.length){
        return res.status(400).json({err: 'Incorrect title'});
    }
    models.Test.create({
        title: title
    }).then((test) => res.status(201).json(test));
};

exports.update = (req, res) => {
    var newTitle = req.body.title || '';
    var id = parseInt(req.params.id, 10);

    if(!newTitle){
        return res.status(400).json({err: 'Incorrect title'});
    }
    if (!id) {
        return res.status(400).json({err: 'Incorrect id'});
    }

    models.Test.update(
        {title: newTitle},
        {where: {id: id}, returning: true}
    ).then(result => {
        res.json({result : 'Updated ' + result[1] + 'row(s)'});
    }).catch(err => {
        return res.status(404).json({err: 'Undefined Error'});
    })

};