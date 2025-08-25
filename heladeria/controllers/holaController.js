exports.getHola = (req, res) => {
  res.json({ mensaje: "¡Hola! Esto es un GET" });
};

exports.postHola = (req, res) => {
  res.json({ mensaje: "¡Hola! Esto es un POST" });
};

exports.putHola = (req, res) => {
  res.json({ mensaje: "¡Hola! Esto es un PUT" });
};
