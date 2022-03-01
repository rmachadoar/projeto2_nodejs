// Define os atributos da tabela no banco de Dados 

const Sequelize = require("sequelize");
const connection = require("../database/database");

//Primeira etapa para criação de relacionamento entre Tabela do banco: Importa o Model Category
const Category = require("../categories/Category");




const Article = connection.define('articles', {
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


// Relacionamento 1 para N (2° etapa criação relacionamentos)
Category.hasMany(Article); // UMA categoria tem MUITOS artigos

// Relacionamento 1 para 1
Article.belongsTo(Category); // BelongsTo = Pertece a.    Dizendo que UM artigo pertece a UMA categoria

// Ao criar novos relacionamentos é necessário ATT o BD de acordo com a linha de baixo
// Article.sync({force: true}); // Vai recriar a tabela e depois de recriar, excluir a função (Deixarei comentado para estudo)

module.exports = Article;