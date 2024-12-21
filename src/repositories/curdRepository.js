const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async createData(data) {
        console.log(data);
        const response = await this.model.create(data);
        return response;
    }

    async deleteData(id) {
        const response = await this.model.destroy({
            where: {
                id: id
            }

        });
        if (!response){
            throw new AppError("The resource you are looking for is not present",StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async updateData(id, data) {
        
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
        return response;
    }

    async getData(id) {
        const response = await this.model.findByPk(id);
        if(!response){
            throw new AppError("The resource you are looking is not present", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAllData() {
            console.log("###############");
            const response = await this.model.findAll();
            console.log("Here Repo");
            console.log(response);
            
            return response;
       
            
        
    }
}

module.exports = CrudRepository;
