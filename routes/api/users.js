const router = require('express').Router();
const userController = ("../../controllers/userController");

router
    .route('/')
    .post(userController.create);