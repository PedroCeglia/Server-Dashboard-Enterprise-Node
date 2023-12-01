const mongoose = require('mongoose')

const estoqueItemShema = new mongoose.Schema({
    produtosList: {
        nome: { type: String, required: true },
        cor: { type: String, required: true },
        ncm: { type: String, required: true },
        preco: { type: Number, required: true },
        id: { type: Number, required: true, unique: true }
    },    
})

module.exports = {Produto: mongoose.model('Produto', estoqueItemShema)}