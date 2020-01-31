const Book = require("../models/book");

function alreadyBook(year) {
    const bookDates = new Array();
    for (let i = 0; i < 12; i++) bookDates.push(new Array());
        return Book.find({year})
            .then((data) => {
                if (data.length > 0) {
                    data.forEach((item) => {
                       bookDates[item.month].push(item.day);
                    });
                    return bookDates;
                };
            });
}

module.exports.init = (req, res) => {
    const date = new Date().getFullYear();
    alreadyBook(date)
    .then(alreadyBook => res.status(200).send({date, alreadyBook}));    
};