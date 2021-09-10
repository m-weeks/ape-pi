var express = require('express');
var router = express.Router();
var bonziController = require('../controllers/bonzi');
var validateParams = require('../middleware/validateParams');

var validationSchema = {
  text: {
    in: ['query'],
    errorMessage: 'Text is invalid',
    isString: true,
    notEmpty: true,
    isLength: { min: 1, max: 1000 },
  }
};
/* GET bonzi voice */
router.get('/bonzi', validateParams(validationSchema), bonziController.get);

module.exports = router;
