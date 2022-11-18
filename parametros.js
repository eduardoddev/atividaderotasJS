var express = require("express");
var app = express();

app.get("/ola/:jogador/:classe/:arma/:elemento/:raca", function(req, res){
    res.send("<h1>Olá, " + req.params.jogador + "!</h1>"+"<h2>Sua classe é: "
    + req.params.classe + "</h2>"+"<h3>Irá jogar com um(a): " + req.params.arma +
     ".</h3>" + "<h3>O seu elemento é: " + req.params.elemento + ".</h3>" + 
     "<h3>Seu avatar é da raça: " + req.params.raca + ".</h3>")
})

app.listen(8091, function(){
    console.log("Servidor rodando na url http:localhost:8091")
});