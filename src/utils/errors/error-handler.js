const AppError = require("./app-error");
const { StatusCodes } = require('http-status-codes');
function errorHandler(err, res) {
    console.log("IOnsside Error Handler");
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is an exception so no data is going tobe provided
        });
    }

    
    else{
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong !',
            error: err,
            data: {} // because this is an exception so no data is going tobe provided
        });
    }
}

module.exports = errorHandler;