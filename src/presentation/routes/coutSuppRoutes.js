const express = require('express');
const coutSuppController = require('../controllers/coutSuppController');

const router = express.Router();

router.get('/', coutSuppController.getAllCoutSupp);
router.post('/', coutSuppController.createCoutSupp);
router.get('/:id', coutSuppController.getCoutSuppById);
router.put('/:id', coutSuppController.updateCoutSupp);
router.delete('/:id', coutSuppController.deleteCoutSupp);

module.exports = router;