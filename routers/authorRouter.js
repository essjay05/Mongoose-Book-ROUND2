/**
|--------------------------------------------------
| BONUS: Add an authorRouter
|--------------------------------------------------
*/

const 
    Author = require('../controllers/author'),
    express = require('express'),
    router = express.Router();

// ROUTES

// INDEX
router.get('/', Author.index)

// SHOW 1
router.get('/:id', Author.show)

// CREATE NEW AUTHOR
router.post('/', Author.create)
// CREATE NEW BOOK FOR SPECIFIC 
router.post('/:id/books/', Author.createBook)

// UPDATE
router.patch('/:id', Author.update)

// DESTROY
router.delete('/:id', Author.destroy)

module.exports = router;
    
