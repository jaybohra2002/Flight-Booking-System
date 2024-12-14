'use strict';
const {Op}=require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplane',[{
      modelNumber:'airbusA380',
      capacity:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber:'airbusA340',
      capacity:180,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber:'boeing777',
      capacity:220,
      createdAt:new Date(),
      updatedAt:new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplane',{[Op.or]:[{modelNumber:'airbusA380'},{modelNumber:'airbusA340'}]});
  }
};
