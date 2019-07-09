const fs = require('fs');

const readStream = fs.createReadStream('./README.md', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./copy.txt');

readStream
  .pipe(process.stdout)
  .pipe(writeStream);
