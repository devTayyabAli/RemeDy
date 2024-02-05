const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

// Create a new follow
router.post('/create_follow', followController.createFollow);
// Get all follows
router.get('/get_follows', followController.getAllFollow);

router.route("/:id")
.get( followController.getFollowById)
.put( followController.updateFollowById)
.delete( followController.deleteFollowById);

module.exports = router;
