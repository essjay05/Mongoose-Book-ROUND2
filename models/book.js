// Require mongoose in here.
const mongoose = require('mongoose');

// Create book schema;
const Schema = mongoose.Schema;

// BOOK MODEL/SCHEMA
const BookSchema = new Schema ({
    title: String,
    author: String,
    image: String,
    releaseDate: Date
}, {timestamps: true});

const Book = mongoose.model('Book', BookSchema);

// MAKE EXPORTABLE
module.exports = Book;