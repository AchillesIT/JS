var res = 0;
const number = [1, 8, 3, 4, 9, 15, 44, 18];
number.sort((a, b) => a - b);

function sum(a, b) {
  return a + b;
}

res = sum(1, 3);

document.getElementById('reses6').innerHTML = number;

const number1 = [1, 8, 3, 4, 9, 15, 44, 18];
number1.sort((a, b) => a - b);
console.log(number1);
//alert(res);

const person = {
    name: 'aaa',
    age: 44,
    lang: ['qqq','www','eee'],
    greet(){
        console.log('greet', this);
        this.lang.forEach(() => {
            console.log('forEach', this);
        });
    }
}