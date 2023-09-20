const express = require('express');
const acteurActionController = require('../controllers/acteurActionController');
const ActeurAction = require('../../core/entities/acteurAction');

const router = express.Router();

router.get('/', acteurActionController.getAllActeurActions);
router.post('/', acteurActionController.createActeurAction);
router.get('/:id', acteurActionController.getActeurActionById);
router.put('/:id', acteurActionController.updateActeurAction);
router.delete('/:id', acteurActionController.deleteActeurAction);

module.exports = router;
