const router = require('express').Router();
const salesController = require('../../controllers/salesController');

router
    .route('/')
    .post(salesController.create);

router
    .route('/:id')
    .get(salesController.findBySellerId);

module.exports = router;