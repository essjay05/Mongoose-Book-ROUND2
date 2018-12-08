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
router.get('/', Book.index)
router.get('/:id', Book.show)
router.post('/', Book.create)
router.patch('/:id', Book.update)
router.delete('/:id', Book.destroy)

module.exports = router;
    
