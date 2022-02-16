// Para criar rotas em um arquivo separado, é necessário importar o express e depoir o ROUTER, excluindo a necessidade de usar a var APP (conforme index.js)
// conforme abaixo para que seja possível criar ROTAS separadas para partes da aplicação.
// Aqui ficarão as ROTAS das categorias do BLOG

const express = require("express"); 
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify")


router.get("/admin/categories/new", (req, res)=> {
    res.render("admin/categories/new");
});


router.post("/categories/save", (req, res) => { // POST SEMPRE que trabalhar com formularios
    var title = req.body.title; // cria varíavel TITLE e armazena o valor do formulário que está com NAME = "TITLE";
    if(title != undefined){

        Category.create({ // Funcao para inserir no banco de dados os dados title e slug
            title: title,
            slug: slugify(title)   // instala biblioteca SLUGIFY para otimizar string para URL
        }).then(() => {
            res.redirect("/");
        })

    }else{
        res.redirect("admin/categoires/new");
    }
});



module.exports = router; // Exporta as rotas da CATEGORIAS para ser capaz de utiliza-las em outro arquivo