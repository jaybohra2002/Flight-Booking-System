const {City} =require('../models');
const CrudRepository=require('./curdRepository');

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }

}

module.exports=CityRepository;