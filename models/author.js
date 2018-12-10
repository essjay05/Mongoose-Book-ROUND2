// REQUIRE IN MONGOOSE
const mongoose = require('mongoose')

// CREATE AUTHOR SCHEMA
const Schema = mongoose.Schema;

// AUTHOR SCHEMA
const AuthorSchema = new Schema ({
    name: String,
    alive: Boolean,
    image: String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
});

// CREATE MODEL
const Author = mongoose.model('Author', AuthorSchema);

// EXPORTABLE
module.exports = Author;