// "use strict";

// const { faker } = require("@faker-js/faker");

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     let data = [];

//     for (let i = 0; i <= 4; i++) {
//       data.push({
//         name: faker.person.fullName(),
//         age: faker.number.int({
//           min: 18,
//           max: 65,
//         }),
//         address: faker.location.streetAddress(),
//         role: "Owner",
//         shopId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       });
//       await queryInterface.bulkInsert(
//         "Users",
//         data,
//         {}
//       );
//     }
//   },

//   async down(queryInterface, Sequelize) {
//     return queryInterface.bulkDelete(
//       "Users",
//       null,
//       {}
//     );
//   },
// };
