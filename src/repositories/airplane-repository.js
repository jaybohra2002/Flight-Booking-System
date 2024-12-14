const {Airplane} =require('../models');
const CrudRepository=require('./curdRepository');
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }

}
module.exports=AirplaneRepository;