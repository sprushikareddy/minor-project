// backend/routes/outpassRoutes.js

const express = require('express');
const { createOutpassRequest, parentApprove, wardenApprove ,getMyOutpasses,filterOutpassesByDate,approveByParent,} = require('../controllers/outpassController');
const { protect } = require('../middleware/authMiddleware');
const { getPendingForParent } = require('../controllers/outpassController');
//const { getPendingOutpassesForParent } = require('../controllers/outpassController');
const { getPendingForWarden, approveByWarden,} = require('../controllers/outpassController');



const router = express.Router();

// 🛠 Only one route for creating outpass (with protect middleware)
router.post('/create', protect, createOutpassRequest);

// 🛠 Parent approval route (PUT)
router.put('/parent-approve/:id', protect, parentApprove);

// 🛠 Warden approval route (PUT)
router.put('/warden-approve/:id', protect, wardenApprove);

router.get('/my-outpasses', protect, getMyOutpasses);
router.post('/my-outpasses', protect, filterOutpassesByDate);
router.get('/parent-pending', protect, getPendingForParent);
//router.get('/parent-outpasses', protect, getPendingOutpassesForParent);
//router.put('/warden/approve/:id', protect, getPendingForWarden);
router.put('/parent-approve/:id', protect, approveByParent);

router.get('/pending-warden', protect, getPendingForWarden);
//router.get('/warden/pending', protect, getPendingForWarden);
router.put('/approve-warden/:id', protect, approveByWarden);





module.exports = router;

