const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesPersonSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, rquired: true },
    userId: { type: String, required: true },
    managerId: { type: String, required: true }
});

const SalesPerson = mongoose.model('SalesPersons', salesPersonSchema);

module.exports = SalesPerson;