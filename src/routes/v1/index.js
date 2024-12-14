const express = require('express');
const airplaneRouter=require('./airplane-routes');


const router = express.Router();
router.use('/airplane',airplaneRouter);


module.exports = router;