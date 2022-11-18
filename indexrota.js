var express = require("express");
var app = express();

app.get("/", function(req,res)
{
    res.send ("Seja bem vindo ao meu app, Devs!")
});

app.get("/sobre", function(req, res){
    res.send("Aqui você encontra informações sobre o App.")
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
});

app.get("/news", function(req, res){
    res.send("Aqui você confere as novidades!")
});

app.get("/parceiros", function(req, res){
    res.send("Lista de parceiros do site.")
});

app.get("/projetos", function(req, res){
    res.send("Confira nossos projetos.")
});

app.listen(8091, function(){
    console.log("Servidor rodando na url http:localhost:8091")
});
