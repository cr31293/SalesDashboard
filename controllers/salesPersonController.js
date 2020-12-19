const db = require('../models/');

module.exports = {
    findByUserId: function(req, res) {
        db.SalesPerson
            .find({ userId: req.params.id })
            .then(data => res.json(data))
            .catch( err = res.status(422).json(err));
    },
    create: function(req, res) {
        db.SalesPerson
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.SalesPerson
            .findByIdAndUpdate({ userId: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.SalesPerson
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};