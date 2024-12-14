const express = require('express');
const airplaneRouter=require('./airplane-routes');
const cityRouter = require('./city-router');


const router = express.Router();
router.use('/airplane',airplaneRouter);
router.use('/city',cityRouter);


module.exports = router;