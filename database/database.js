const Sequelize = require("sequelize"); // 1° import do Sequelize para criar conexão com o BD

const connection = new Sequelize('projetoblog', 'root', '123456',{ // Nome do BD, usuário, senha do usuário
    host: 'localhost', // Servidor: Localhost (próprio computador)
    dialect: 'mysql', // Tipo de BD que o Sequelize vai utilizar. Podendo ser Postgress, sql light etc.
    timezone: '-3:00'
});


module.exports = connection; // Exportar a conexão com o banco de dados