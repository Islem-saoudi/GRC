const express = require('express');
const securityCheckFamilyController = require('../controllers/securityCheckFamilyController');

const router = express.Router();

router.get('/', securityCheckFamilyController.getAllSecurityCheckFamily);
router.post('/', securityCheckFamilyController.createSecurityCheckFamily);
router.get('/:id', securityCheckFamilyController.getSecurityCheckFamilyById);
router.put('/:id', securityCheckFamilyController.updateSecurityCheckFamily);
router.delete('/:id', securityCheckFamilyController.deleteSecurityCheckFamily);

module.exports = router;

