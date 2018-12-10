/**
|--------------------------------------------------
| BONUS: Add a Book controller
|--------------------------------------------------
*/
// REQUIRE BOOK MODEL
const { Book, Author } = require('../models')


module.exports = {
    index: (req, res) => {
        Author.find({}, (err, authors) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, authors });
        })
    },

    create: (req, res) => {
        Author.create(req.body, (err, newAuthor) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, newAuthor});
        })
    },

    createBook: (req, res) => {
        Author.findById(req.params.id, (err, author) => {
            if (err) res.json({ success: false, err});

            let newBook = new Book(req.body);
            newBook.author = author._id;

            newBook.save(err => {
                if (err) res.json({ success: false, err});

                author.books.push(newBook);
                author.save((err, savedAuthor) => {
                    if (err) res.json({ success: false, err});
                    res.json({ success: true, savedAuthor});
                })
            });
        })
    },

    show: (req, res) => {
        Author.findById(req.params.id)
            .populate('books')
            .exec((err, book) => {
                if (err) res.json({ success: false, err});
                res.json({ success: true, book});
        })
    },

    update: (req, res) => {
        let { body, params } = req;
        Author.findByIdAndUpdate(params.id, body, {new: true}, (err, updateAuthor) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, updateAuthor});
        })
    },

    destroy: (req, res) => {
        Author.findByIdAndDelete(req.params.id, (err, deleteAuthor) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, deleteAuthor});
        })
    }


}