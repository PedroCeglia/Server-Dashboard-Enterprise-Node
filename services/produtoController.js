const connectDatabase = require('../database/connection')
const Produto = require('../database/estoque')

const adicionarDados =  async (produto) => {
  connectDatabase()
  const criarProduto = await Produto.create(produto)
  return criarProduto
};

const listarEstoque = async () => {
  await connectDatabase()
  const products = await Produto.find()
  return products
};

module.exports = {
  adicionarDados,
  listarEstoque,
};
