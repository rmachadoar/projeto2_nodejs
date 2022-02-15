// Para criar rotas em um arquivo separado, é necessário importar o express e depoir o ROUTER, excluindo a necessidade de usar a var APP (conforme index.js)
// conforme abaixo para que seja possível criar ROTAS separadas para partes da aplicação.
// Aqui ficarão as ROTAS das categorias do BLOG

const express = require("express"); 
const router = express.Router();

router.get("/admin/categories/new", (req, res)=> {
    res.render("admin/categories/new");
});



module.exports = router; // Exporta as rotas da CATEGORIAS para ser capaz de utiliza-las em outro arquivo