const Book = require("../models/book");

module.exports.postBook = (req, res) => {
    const year = new Date().getFullYear();
    const {phone, day, month} = req.body;
    Book.create({phone, day, month, year})
    .then(() => res.status(201).end())
    .catch(() => res.status(500).end());
};
