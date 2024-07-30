'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users',[
      {
        "user": "gabrielmendes",
        "name": "Gabriel",
        "lastname": "Mendes",
        "active": true,
        "email": "gabrielmendes@email.com",
        "personal_id": "99999999999",
        "role": "administrator",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "luisgustavo",
        "name": "Luiz Gustavo",
        "lastname": "Monteiro",
        "active": true,
        "email": "luisgustavo@email.com",
        "personal_id": "99999999999",
        "role": "administrator",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "jefersonteodoro",
        "name": "Jeferson",
        "lastname": "Teodoro",
        "active": true,
        "email": "jefersonteodoro@email.com",
        "personal_id": "88888888888",
        "role": "administrador",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "amandasilva",
        "name": "Amanda",
        "lastname": "Silva",
        "active": true,
        "email": "amandasilva@email.com",
        "personal_id": "77777777777",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "carolinadias",
        "name": "Carolina",
        "lastname": "Dias",
        "active": true,
        "email": "carolinadias@email.com",
        "personal_id": "66666666666",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "pedroribeiro",
        "name": "Pedro",
        "lastname": "Ribeiro",
        "active": true,
        "email": "pedroribeiro@email.com",
        "personal_id": "55555555555",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "julianaborges",
        "name": "Juliana",
        "lastname": "Borges",
        "active": true,
        "email": "julianaborges@email.com",
        "personal_id": "44444444444",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "andreluiz",
        "name": "Andre",
        "lastname": "Luiz",
        "active": true,
        "email": "andreluiz@email.com",
        "personal_id": "33333333333",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "isabelsantos",
        "name": "Isabel",
        "lastname": "Santos",
        "active": true,
        "email": "isabelsantos@email.com",
        "personal_id": "22222222222",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "rodrigomartins",
        "name": "Rodrigo",
        "lastname": "Martins",
        "active": true,
        "email": "rodrigomartins@email.com",
        "personal_id": "11111111111",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "alinedias",
        "name": "Aline",
        "lastname": "Dias",
        "active": true,
        "email": "alinedias@email.com",
        "personal_id": "00000000000",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "thiagocosta",
        "name": "Thiago",
        "lastname": "Costa",
        "active": true,
        "email": "thiagocosta@email.com",
        "personal_id": "12345678900",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "fernandamoura",
        "name": "Fernanda",
        "lastname": "Moura",
        "active": true,
        "email": "fernandamoura@email.com",
        "personal_id": "23456789011",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "marcelocarvalho",
        "name": "Marcelo",
        "lastname": "Carvalho",
        "active": true,
        "email": "marcelocarvalho@email.com",
        "personal_id": "34567890122",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "paularocha",
        "name": "Paula",
        "lastname": "Rocha",
        "active": true,
        "email": "paularocha@email.com",
        "personal_id": "45678901233",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "ricardosouza",
        "name": "Ricardo",
        "lastname": "Souza",
        "active": true,
        "email": "ricardosouza@email.com",
        "personal_id": "56789012344",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "marinasantos",
        "name": "Marina",
        "lastname": "Santos",
        "active": true,
        "email": "marinasantos@email.com",
        "personal_id": "67890123455",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "viniciusoliveira",
        "name": "Vinicius",
        "lastname": "Oliveira",
        "active": true,
        "email": "viniciusoliveira@email.com",
        "personal_id": "78901234566",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "patriciacastro",
        "name": "Patricia",
        "lastname": "Castro",
        "active": true,
        "email": "patriciacastro@email.com",
        "personal_id": "89012345677",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "guilhermealves",
        "name": "Guilherme",
        "lastname": "Alves",
        "active": true,
        "email": "guilhermealves@email.com",
        "personal_id": "90123456788",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "renatolima",
        "name": "Renato",
        "lastname": "Lima",
        "active": true,
        "email": "renatolima@email.com",
        "personal_id": "01234567899",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "user": "claudiarodrigues",
        "name": "Claudia",
        "lastname": "Rodrigues",
        "active": true,
        "email": "claudiarodrigues@email.com",
        "personal_id": "11223344556",
        "role": "user",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});

  }
};