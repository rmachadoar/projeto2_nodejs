// Define os atributos da tabela no banco de Dados 

const Sequelize = require("sequelize");
const connection = require("../database/database"); // Carregando conexão com o banco

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{    // Versão do titulo da categoria para se utilizar em URL, ex: Nome do artigo = Desenvolvimento Web. SLUG = desenvolvimento-web
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Category;