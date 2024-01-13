const Test = require('@model/test');

const TestController = {
  ConectionFeedback(req, res) {
    res.sendError('Erro de conexão meu pivete', 500);
  },
  async createSomeone(req, res) {
    try {
      const { name, age } = req.body;
      const person = new Test({ name, age });
      const savedPerson = await person.save();
      res.send(savedPerson);
    } catch (err) {
      res.status(500).send({ message: 'Erro ao criar a pessoa.' });
    }
  },
};

module.exports = TestController;
