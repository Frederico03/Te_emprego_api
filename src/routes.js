const router = require('express').Router();
const TestController = require('@controller/test');

router
  .get('/', TestController.ConectionFeedback)
  .post('/', TestController.createSomeone);

module.exports = router;
