// Para criar rotas em um arquivo separado, é necessário importar o express e depoir o ROUTER, excluindo a necessidade de usar a var APP (conforme index.js)
// conforme abaixo para que seja possível criar ROTAS separadas para partes da aplicação.
// Aqui ficarão as ROTAS das categorias do BLOG

const express = require("express"); 
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");


router.get("/admin/categories/new", (req, res)=> {
    res.render("admin/categories/new");
});


router.post("/categories/save", (req, res) => { // POST SEMPRE que trabalhar com formularios
    var title = req.body.title; // cria varíavel TITLE e armazena o valor do formulário que está com NAME = "TITLE";
    if(title != undefined){

        Category.create({ // Funcao para inserir no banco de dados os dados title e slug
            title: title,
            slug: slugify(title)   // instalar antes a biblioteca SLUGIFY para otimizar string para URL
        }).then(() => {
            res.redirect("admin/categories");
        })

    }else{
        res.redirect("admin/categories/new");
    }
});


router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => { // Pega os dados da tabela categories
        res.render("admin/categories/index", {categories: categories}); // Armazena os dados da tabela categories na VAR CATEGORIES e exporta para a view (HTML)
    })
    
});

router.post("/categories/delete", (req, res) => {
    var id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){ // Se for um numero

            Category.destroy({
                where: { // Destruir uma categoria onde o ID da categoria for igual ID
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            })


        }else{
            res.redirect("/admin/categories");
        }
    }else{ // se for nulo
        res.redirect("/admin/categories");
    }
});


router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/categories");
    };

    Category.findByPk(id).then(category => { //FindByPk = Método especifico para pesquisar o ID pela categoria
        if(category != undefined){
            res.render("admin/categories/edit", { category: category});
        }else{
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
    })   
});


router.post("/categories/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;

    Category.update({title: title, slug: slugify(title)}, { // Atualiza o titulo da categoria que pertence ao ID recebido
        where: {
            id: id
        }
    }).then(() =>{
        res.redirect("/admin/categories");
    })
})

module.exports = router; // Exporta as rotas da CATEGORIAS para ser capaz de utiliza-las em outro arquivo