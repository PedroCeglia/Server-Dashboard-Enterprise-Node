const xml2js = require('xml2js')

function xmlConverter(req, res) {
  const xmlFile = req.file;
  if (!xmlFile) {
    res.status("400").json({ error: "Ocorreu um erro   ); " });
  }

  const xmlParser = new xml2js.Parser({ explicitArray: false });
  xmlParser.parseString(xmlFile.buffer.toString(), (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao converter XML para JSON." });
    }

    res.json(result);
  });
}

module.exports = {xmlConverter}