// Controlador de helados

const getMain = (req, res) => {
  try {
    res.send('necesito get info');
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getMain
};
