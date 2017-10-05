'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name : 'Haris',
      last_name : 'Purwana',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'harispurwana@gmail.com'
    },{
      first_name : 'Jayalah',
      last_name : 'Wisnu',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'jayalahwisnu@gmail.com'
    },{
      first_name : 'Andi',
      last_name : 'Nainggolan',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'andinainggolan@gmail.com'
    },{
      first_name : 'Venus',
      last_name : 'Siana',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'venussiana@gmail.com'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
