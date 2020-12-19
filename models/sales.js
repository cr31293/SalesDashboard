const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    serialNumber: { type: String, required: true },
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    carModelYear: { type: Date, required: true },
    saleAmount: { type: Number, required: true },
    sellerUserId: { type: String, required: true },
    saleDate: { type: Date, required: true }
});

const Sale = mongoose.model('Sales', saleSchema);

module.exports = Sale;