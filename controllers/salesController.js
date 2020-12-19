const db = require('../models');

module.exports = {
    create: function(req, res) {
        db.Sales
        .create(req.body)
        .then(data => {console.log(data); req.json(data)})
        .catch(err => res.status(422).json(err));
    },
    find: function(req, res) {
        db.Sales
        .findById({ sellerUserId: req.params.sellerUserId })
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Sales
        .findOne({ _id: req.params.id })
        .then(data => data.remove())
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }
};