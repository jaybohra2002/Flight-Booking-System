const express=require('express');
const cityRouter=express.Router();
const {CityController}=require('../../controllers');
const {CityMiddleware}=require('../../middlewares');
cityRouter.post('/', CityMiddleware.validateCreateRequest,CityController.createCity );
cityRouter.patch('/:id',CityController.updateCity);
cityRouter.delete('/:id',CityController.destroyCity);
cityRouter.get('/',CityController.getCities);
module.exports=cityRouter;