const fs = require('fs');

const readStream = fs.createReadStream('./README.md', { encoding: 'utf8', highWaterMark: 1024 });
const writeStream = fs.createWriteStream('./copy.txt');

readStream.on('data', (data) => {
  writeStream.write(data);
});

readStream.on('end', () => {
  writeStream.end();
});
