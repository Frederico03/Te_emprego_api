const app = require('@app');
const config = require('@config');

module.exports = (err) => {
  console.clear();
  if (err) {
    console.log('Erro ao conectar com o banco de dados!');
  } else {
    app.listen(config.app.port, (err) => {
      if (err) {
        return console.log(`error -->${err}`);
      }

      console.log(`ecutando em ${config.app.port}`);
    });
  }
};
