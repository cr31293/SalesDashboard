const router = require('express').Router();
const salesPersonController = require('../../controllers/salesPersonController');

router
    .route('/')
    .post(salesPersonController.create);

router
    .route('/:id')
    .get(salesPersonController.findByUserId)
    .put(salesPersonController.update)
    .delete(salesPersonController.remove);

module.exports = router;