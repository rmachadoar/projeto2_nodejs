// Para criar rotas em um arquivo separado, é necessário importar o express e depoir o ROUTER, excluindo a necessidade de usar a var APP (conforme index.js)
// como abaixo para que seja possível criar ROTAS separadas para partes da aplicação.
// Aqui ficarão as ROTAS dos artigos do BLOG

const express = require("express");
const router = express.Router();


router.get("/articles", (req, res) => {
    res.send("Rota de artigos");
});


router.get("/admin/articles/new", (req, res) => {
    res.render("admin/articles/new");
});


module.exports = router;