//____________Status____________const express = require("express"); //Importando o módulos express vindo do framework Express.js
const express = require("express");
const app = express(); // Criando uma instância dele

app.use(
  //Criando middleware para processar dados enviados via POST ou PUT. Usando o 'unrencoded' para transformar o html em um obj JS
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json()); //Middleware, transformando JSON and um obj JS

//rotas - endpoints
app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  console.log(name);
  console.log(price);

  if (!name) {
    res.status(422).json({ message: `O campo 'nome', é obrigatório` });
    return;
  }

  res
    .status(201)
    .json({ message: `O produto '${name}' foi criado com sucesso` });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Primeira rota criada com sucesso" });
}); //Inicializando uma rota 'get' para o express

app.listen(3000);
