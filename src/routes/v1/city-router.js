const express=require('express');
const cityRouter=express.Router();
const {CityController}=require('../../controllers');
const {CityMiddleware}=require('../../middlewares');
cityRouter.post('/', CityMiddleware.validateCreateRequest,CityController.createCity );
module.exports=cityRouter;