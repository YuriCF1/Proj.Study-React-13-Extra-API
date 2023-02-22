const express = require("express"); //Importando o módulos express vindo do framework Express.js
const app = express(); // Criando uma instância dele

app.use(
  //Criando middleware para processar dados enviados via POST ou PUT. Usando o 'unrencoded' para transformar o html em um obj JS
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json()); //Middleware, transformando JSON and um obj JS

//rotas - endpoints
app.get("/", (req, res) => {
  res.json({ message: "Primeira rota criada com sucesso" });
}); //Inicializando uma rota 'get' para o express

app.listen(3000);
