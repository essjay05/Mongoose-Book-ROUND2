require('dotenv').config();

const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000;

// Database
require('./db');

// Configurations

// Middlware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'views')));
app.use(logger('dev'));
app.use(express.json());

// Routes
const bookRouter = require('./routers/bookRouter');
const authorRouter = require('./routers/authorRouter');
app.use('/api/books', bookRouter);
app.use('/api/authors', authorRouter);


/**
|--------------------------------------------------
| Required Routes
|
| 1. Index - show all books
| 2. Create - create a book
| 3. Show - show a book by ID.
| 4. Update - update a book by ID
| 5. Destroy - delete a book by ID.
|--------------------------------------------------
*/

app.listen(PORT, err => {
    console.log(err || `Listening on port ${PORT}`);
});