/**
|--------------------------------------------------
| BONUS: Add a bookRouter
|--------------------------------------------------
*/

const 
    Book = require('../controllers/book'),
    express = require('express'),
    router = express.Router();

// ROUTES

// INDEX
router.get('/', Book.index)

// SHOW 1
router.get('/:id', Book.show)

// CREATE
router.post('/', Book.create)

// UPDATE
router.patch('/:id', Book.update)

// DESTROY
router.delete('/:id', Book.destroy)

module.exports = router;
    
