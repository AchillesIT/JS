var res = 0;

const number = [1, 8, 3, 4, 9, 15, 44, 18];
//res = number.sort();
document.getElementById('reses6').innerHTML = res;

const sum = (a, b) => {
  return a + b;
};

const sum2 = (a = 0, b = 0) => a + b;
const result = sum2(3, 5);

res = sum(1, 3);


//document.getElementById('reses6').innerHTML = res;
console.log(res);
//alert(res);

const square = (num) => num * num;
const square1 = num => num * num;

const printHello = () => {
    console.log('hello');
}
