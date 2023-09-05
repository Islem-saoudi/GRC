const express = require('express');
const commentaireController = require('../controllers/commentaireController');

const router = express.Router();

router.get('/', commentaireController.getAllCommentaires);
router.post('/', commentaireController.createCommentaire);
router.get('/:id', commentaireController.getCommentaireById);
router.put('/:id', commentaireController.updateCommentaire);
router.delete('/:id', commentaireController.deleteCommentaire);

module.exports = router;
