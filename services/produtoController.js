const dados = []; 

const adicionarDados = (novoDado) => {
  dados.push(novoDado);
};

const listarEstoque = (req, res) => {
  res.json(dados);
};

module.exports = {
  adicionarDados,
  listarEstoque,
};
