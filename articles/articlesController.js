// Para criar rotas em um arquivo separado, é necessário importar o express e depoir o ROUTER, excluindo a necessidade de usar a var APP (conforme index.js)
// como abaixo para que seja possível criar ROTAS separadas para partes da aplicação.
// Aqui ficarão as ROTAS dos artigos do BLOG

const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify")

router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include: [{model: Category}] // Puxa os dados da Cateoria
    }).then(articles => {
        res.render("admin/articles/index", {articles:articles});
    });
    
});


router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories}); 
    })
    
});


router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => 
    res.redirect("/admin/articles"));
})


module.exports = router;