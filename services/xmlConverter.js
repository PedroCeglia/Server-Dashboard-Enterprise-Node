const xml2js = require("xml2js");

// Verifica se um arquivo XML foi enviado
const verifyXmlGo = (xmlFile) => {
    if (!xmlFile) {
        return true;
    }
}

// Converte o XML para JSON usando xml2js
const xmlConverterToJson = (xmlBufferString, res) => {
    const xmlParser = new xml2js.Parser({ explicitArray: false });
    xmlParser.parseString(xmlBufferString, (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Erro ao converter XML para JSON." });
        }

        res.json(result);
    });
}

module.exports = {
    verifyXmlGo,
    xmlConverterToJson,
};
