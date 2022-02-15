// Define os atributos da tabela no banco de Dados 

const Sequelize = require("sequelize");
const connection = require("../database/database");


const Article = connection.define("articles", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING, // Versão do titulo da categoria para se utilizar em URL, ex: Nome do artigo = Desenvolvimento Web. SLUG = desenvolvimento-web
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Article;