const express = require('express');
const securityCheckController = require('../controllers/securityCheckController');

const router = express.Router();

router.get('/', securityCheckController.getAllSecurityCheck);
router.post('/', securityCheckController.createSecurityCheck);
router.get('/:id', securityCheckController.getSecurityCheckById);
router.put('/:id', securityCheckController.updateSecurityCheck);
router.delete('/:id', securityCheckController.deleteSecurityCheck);

module.exports = router;

