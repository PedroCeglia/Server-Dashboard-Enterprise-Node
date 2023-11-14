const mongoose = require("mongoose");

const teste = new mongoose.Schema({
  nItem: String,
  prod: {
    cProd: String,
    cEAN: String,
    xProd: String,
    NCM: String,
    CEST: String,
    CFOP: String,
    uCom: String,
    qCom: String,
    vUnCom: String,
    vProd: String,
    cEANTrib: String,
    uTrib: String,
    qTrib: String,
    vUnTrib: String,
    indTot: String,
    DI: {
      nDI: String,
      dDI: String,
      xLocDesemb: String,
      UFDesemb: String,
      dDesemb: String,
      tpViaTransp: String,
      vAFRMM: String,
      tpIntermedio: String,
      cExportador: String,
      adi: {
        nAdicao: String,
        nSeqAdic: String,
        cFabricante: String,
      },
    },
  },
});
