var express = require("express");
var app = express();

app.get("/hello/:nome/:cargo/:cor", function(req, res){
    res.send("<h1>Olá, " + req.params.nome + "!</h1>"+"<h2>Seu cargo é: "
    + req.params.cargo + "</h2>"+"<h3>Sua cor favorita é: " + req.params.cor + "</h3>")
})

app.listen(8091, function(){
    console.log("Servidor rodando na url http:localhost:8091")
});
