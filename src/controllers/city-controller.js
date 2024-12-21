const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');
const { success, errors } = require('../utils/common');


async function createCity(req, res) {
    try {
        console.log("Inside Cobntroller");
        const city = await CityService.createCity({
           name:req.body.name
        });
        success.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(success);
    } catch(error) {
       
        errors.error = error.explaination;
        
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error);
    }
}


async function updateCity(req,res){
    try {
        console.log("here");
        const response=await CityService.updateCity(req.params.id,req.body);
        
    success.data=response;
    return res
            .status(StatusCodes.OK)
            .json(success);
    } catch (error) {
        errors.error=error;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(errors);
    }
}
async function destroyCity(req, res) {
    try {
        const response = await CityService.destroyCity(req.params.id);
        success.data = response;
        return res
                .status(StatusCodes.OK)
                .json(success);
    } catch(error) {
        errors.error = error;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(errors);
    }
}
async function getCities(req, res) {
    try {
        console.log("HERE");
        const response = await CityService.getCities();
        console.log(response);
        success.data = response;
        console.log(success);
        return res
                .status(StatusCodes.OK)
                .json(success);
    } catch(error) {
        errors.error = error;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(errors);
    }
}



module.exports={
    createCity,
    updateCity,
    destroyCity,
    getCities
}