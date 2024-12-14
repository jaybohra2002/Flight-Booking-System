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


module.exports={
    createCity
}