'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        user: 'gabrielmendes',
        name: 'Gabriel',
        lastname: 'Mendes',
        ativo: true,
        email: 'gabrielmendes@email.com',
        cpf: '77777777777',
        role: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'luisgustavo',
        name: 'Luiz Gustavo',
        lastname: 'Kibe',
        ativo: true,
        email: 'luisgustavo@email.com',
        cpf: '99999999999',
        role: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'jefinteodoro',
        name: 'Jefin',
        lastname: 'Teodoro',
        ativo: true,
        email: 'jefinteodoro@email.com',
        cpf: '88888888888',
        role: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
