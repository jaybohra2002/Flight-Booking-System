const { StatusCodes } = require('http-status-codes');

const { error } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        error.message = 'Something went wrong while creating airplane';
        error.error = new AppError(['Model Number not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(error);
    }
    next();
}

module.exports = {
    validateCreateRequest
}