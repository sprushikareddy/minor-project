// backend/routes/authRoutes.js
const express = require('express');
const { register, login ,employeeLogin, parentLogin, studentLogin} = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/employee-login', employeeLogin);
router.post('/student-login', studentLogin);
router.post('/parent-login', parentLogin);


module.exports = router;
