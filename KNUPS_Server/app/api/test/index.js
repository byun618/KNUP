const express = require('express');
const router = express.Router();
const test = require('./test');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;

router.get('/', test.index);
router.get('/:id', test.show);
router.delete('/:id', test.destroy);
router.post('/', test.create);
router.put('/:id', test.update);

