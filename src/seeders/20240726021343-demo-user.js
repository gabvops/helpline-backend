'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users',[
      {
        user: 'gabrielmendes',
        name: 'Gabriel',
        lastname: 'Mendes',
        active: true,
        email: 'gabrielmendes@email.com',
        personal_id: '77777777777',
        role: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'luisgustavo',
        name: 'Luiz Gustavo',
        lastname: 'Kibe',
        active: true,
        email: 'luisgustavo@email.com',
        personal_id: '99999999999',
        role: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'jefinteodoro',
        name: 'Jefin',
        lastname: 'Teodoro',
        active: true,
        email: 'jefinteodoro@email.com',
        personal_id: '88888888888',
        role: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});

  }
};