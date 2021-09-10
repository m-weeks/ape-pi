var { checkSchema, validationResult } = require('express-validator');

/**
 * Generates a series of middleware to handle errors with express-validator
 * @param {Object} schema An express-validator compatible schema to validate against
 * @returns 
 */
module.exports = (schema) => {
  return [
    checkSchema(schema),
    (req, res, next) => {
      var errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      next();
    }
  ]
}