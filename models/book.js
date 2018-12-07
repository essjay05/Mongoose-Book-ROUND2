// Require mongoose in here.
const mongoose = require('mongoose');

// Create book schema;
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: String,
    author: String,
    image: String,
    releaseDate: Date
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;