const fs = require('fs');

const readFilePromise = fileName => {
  // return a promise
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise('../README.md')
  .then(content => console.log(content))
  .catch(err => console.error(err));

