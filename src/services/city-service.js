const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository = new CityRepository();
async function createCity(data) {
    try {
        const city = await cityRepository.createData(data);
        return city;
    } catch(error) {
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function updateCity(id, data){
    try {
        const response=await cityRepository.updateData(id, data);
        if(response[0]===0){
            throw new AppError("The City you requested to update is not present",StatusCodes.BAD_REQUEST);
        }
        return response;
    } catch (error) {
       throw error;
    }
}
async function destroyCity(id) {
    try {
        const response = await cityRepository.deleteData(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getCities() {
    try {
       console.log("Here");
        const cities = await cityRepository.getAllData();
        console.log(cities);
        return cities;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createCity,
    updateCity,
    destroyCity,
    getCities

}
