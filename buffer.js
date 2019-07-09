function makeBuff(hex) {
  return Buffer.from(hex);
}

const smile = makeBuff([0xF0, 0x9F, 0x98, 0x81]);

console.log([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile[0]);
console.log(smile.map(letter => letter.toString(2)));

module.exports = makeBuff;
