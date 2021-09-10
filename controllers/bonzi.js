var util = require('util');
var execFile = util.promisify(require('child_process').execFile);
var temp = require('temp').track();
var mkdir = util.promisify(temp.mkdir);


/**
 * Generates a .wav of the requested text and return it
 */
module.exports.get = async (req, res, next) => {

  var filePath = `${await mkdir('bonzi')}/bonzi.wav`;

  await execFile('wine', [
    '/app/sapi4.exe',
    '-v',
    'Adult Male #2, American English (TruVoice)',
    '-s',
    157,
    '-p',
    140,
    '-t',
    req.query.text,
    '-o',
    filePath
  ]);

  console.log(filePath);

  await new Promise((resolve, reject) => {
    res.download(filePath, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  })

  temp.cleanup();

  next();
};