const express = require('express');
const router = express.Router();
const movieController = require('../controllers/filmController');


router.get('/', movieController.index);


router.get('/:id', movieController.show);

router.get('/:id' , movieController.storeReview)

module.exports = router;