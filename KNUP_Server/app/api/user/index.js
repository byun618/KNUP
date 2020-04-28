const express = require('express');
const router = express.Router();
const user = require('./user');

module.exports = router;

router.get('/', user.index);
router.post('/sign_up', user.sign_up);
router.post('/login', user.login);
router.get('/logout', user.logout);


// router.get('/:id', test.show);
// router.delete('/:id', test.destroy);
// router.post('/', test.create);
// router.put('/:id', test.update);

