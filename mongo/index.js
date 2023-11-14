const mongoose = require("mongoose")
const uri = "mongodb+srv://pctxdev:felinharcp2005@cluster0.xcxso7v.mongodb.net/?retryWrites=true&w=majority";

function initializeMongo(){
    mongoose
      .connect(uri)
      .then(() => {
        console.log("MongoDB CONECTADO!");
      })
      .catch((erro) => {
        console.log(erro);
      });
}

module.exports = {initializeMongo}