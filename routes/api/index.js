const router = require('express').Router();
const userRoutes = require('./users');
const salesRoutes = require('./sales');
const salesPersonRoutes = require('./salesperson');

//User routes
router.use('/users', userRoutes);

//Sales routes
router.use('/sales', salesRoutes);

//Salesperson routes
router.use('/salesperson', salesPersonRoutes);

module.exports = router;