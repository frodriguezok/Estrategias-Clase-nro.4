const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });



/* 1) Inserción de un registro*/

sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Fernando',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


  
/* Actualizacion de registro */

const Model = Sequelize.Model;
class User extends Model {}
  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'user'
});
  
User.update({ lastName: "Lopez" }, {
    where: {
      firstName: 'Fernando'
    }
}).then(() => {
    console.log("Done");
});