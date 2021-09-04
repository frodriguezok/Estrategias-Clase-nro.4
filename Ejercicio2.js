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

/* Insercion */
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Marcelo',
    lastName: 'Fasulo'
}))
  .then(jane => {
    console.log(jane.toJSON());
});

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


/* Eliminacion */
User.destroy({
  where: {
    firstName: 'Gustavo'
  }
}).then(() => {
  console.log("Elimine Registro");
});