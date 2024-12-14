const { StatusCodes } = require('http-status-codes');

const { errors } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    
    if(!req.body.name) {
        errors.message = 'Something went wrong while creating city';
        errors.error = new AppError(['City name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errors);
    }
    next();
}

module.exports = {
    validateCreateRequest
}