const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));
// router.use('/contacts', require('./contacts'));

module.exports = router;