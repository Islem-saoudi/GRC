const express = require('express');
const actionController = require('../controllers/actionController');
const Action = require('../../core/entities/action');

const router = express.Router();

router.get('/', actionController.getAllActions);
router.get('/paginated', actionController.getPaginatedActions);
router.post('/', actionController.createAction);
router.get('/:id', actionController.getActionById);
router.put('/:id', actionController.updateAction);
router.delete('/:id', actionController.deleteAction);

module.exports = router;
