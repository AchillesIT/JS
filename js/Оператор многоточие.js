const numbers1 = [4, 9, 15, 44, 18];
const numbers2 = [1, 8, 3];

const allNumbers = [23, ...numbers1, ...numbers2, 4];

const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers1));

const obj1 = {
  name: 'Anna',
  x: 20
}

const obj2 = {
  name: 'Boris',
  y: 99
}

const newObjClone = {...obj1}
const mergedObj = {...obj1, ...obj2}