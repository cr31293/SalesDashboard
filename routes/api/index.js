const router = require('express').Router();
const userRoutes = require('./users');
const salesRoutes = require('./sales');
const salesPersonRoutes = require('./salespersons');

//User routes
router.use('/users', userRoutes);

//Sales routes
router.user('/sales', salesRoutes);

//Salesperson routes
router.user('/salesperson', salesPersonRoutes);

module.exports = router;