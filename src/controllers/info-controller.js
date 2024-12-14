const { StatusCodes } = require('http-status-codes');
const {successResponse}=require('../utils');
const info = (req, res) => {
    return res.status(StatusCodes.OK).
    json(successResponse);
}

module.exports = {
    info
}