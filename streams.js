const fs = require('fs');

const readStream = fs.createReadStream('./README.md', { encoding: 'utf8', highWaterMark: 1024 });

readStream.on('data', data => {
  console.log('\n\n\n\n\n', data);
});
