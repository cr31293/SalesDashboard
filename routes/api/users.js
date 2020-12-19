const router = require('express').Router();
const userController = ("../../controllers/userController");

router
    .route('/')
    .post(userController.create);

router
    .route('/id')
    .delete(userController.remove);

router
    .route('/:email')
    .get(userController.find);

module.exports = router;