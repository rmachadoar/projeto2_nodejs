const express = require("express"); // 1° etapa
const app = express(); // 1° etapa
const bodyParser = require("body-parser"); // Trabalhar com formularios
const connection = require("./database/database"); // Importa para esse arquivo o connection

const categoriesController = require("./categories/CategoriesController"); // Importa as rotas de categorias criadas
const articlesController = require("./articles/articlesController");// Importa as rotas de ARTIGOS criadas

const Article = require("./articles/Article"); // Importar as models para que o Node.js crie as tabelas com novos relacionamentos ao rodar
const Category = require("./categories/Category"); // Importar as models para que o Node.js crie as tabelas com novos relacionamentos ao rodar


// View Engine 2°
app.set('view engine', 'ejs'); // 2


// Static

app.use(express.static('public'));


//Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate() // Tenta conectar ao BD
    .then(() => { // Caso dê tudo certo exibir:
        console.log("Conexão feita com sucesso");
    }).catch((error) => { // Caso dê erro, cai no catch e exibe erro.
        console.log(error)
    });




app.use("/", categoriesController); // Utiliza as rotas criadas no arquivo CategoriesController
app.use("/", articlesController); // Utiliza as rotas cridas no articleController.


app.get("/", (req, res) => {// 1° etapa
    res.render("index");;
});// 1° etapa


app.listen(8080, () => {// 1° etapa
    console.log("O servidor está rodando");// 1° etapa
}); // 1° etapa