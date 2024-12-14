const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { success, errors } = require('../utils/common');

/**
 * POST : /airplanes odelNumber: 'airbus320'
 * req-body {m, capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        success.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(success);
    } catch(error) {
        errors.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error);
    }
}


/**
 * POST : /airplanes
 * req-body {}
 */
async function getAirplanes(req, res) {
    try {
       
        const airplanes = await AirplaneService.getAirplanes();
        
        success.data = airplanes;
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

/**
 * POST : /airplanes/:id 
 * req-body {}
 */
async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        success.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(success);
    } catch(error) {
        errors.error = error;
        return res
                .status(error.statusCode)
                .json(errors);
    }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        success.data = airplanes;
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
async function updateAirplane(req,res){
    try {
        
        const response=await AirplaneService.updateAirplane(req.params.id,req.body);
        
    success.data=response;
    return res
            .status(StatusCodes.OK)
            .json(success);
    } catch (error) {
        errors.error=error;
        return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(errors);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}