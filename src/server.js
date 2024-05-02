const express = require("express");
const { routes } = require("./routes/user");

const app = express();

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
