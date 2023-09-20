const express = require('express');
const rasciController = require('../controllers/rasciController');
const Rasci = require('../../core/entities/rasci');

const router = express.Router();

router.get('/', rasciController.getAllRascis);
router.post('/', rasciController.createRasci);
router.get('/:id', rasciController.getRasciById);
router.put('/:id', rasciController.updateRasci);
router.delete('/:id', rasciController.deleteRasci);

module.exports = router;
