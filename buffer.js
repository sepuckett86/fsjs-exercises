const myBuff = new Buffer.alloc(10);
myBuff.write('hi');
console.log(myBuff);

module.exports = myBuff;
