var w = 'hello world';
console.log(w);

function addition(a, b) {
  console.log(a + b);
}

function subtraction(a, b) {
  console.log(a - b);
}

function multiplication(a, b) {
  console.log(a * b);
}

function division(a, b) {
  console.log(a / b);
}

addition(9, 3);
subtraction(9, 3);
multiplication(9, 3);
division(9, 3);

function temp(a) {
  if (a < 34.0) {
    console.log('저온');
  }
  if (34.0 < a && a < 37.0) {
    console.log('정상');
  }
  if (37.0 < a) {
    console.log('고온');
  }
}

temp(33.0);
temp(36.5);
temp(40.0);

function gugudan(a) {
  n = 0;
  while (n++ < 9) {
    console.log(a * n);
  }
}

function kukudan(a) {
  for (let i = 1; i < 10; i++) {
    console.log(a * i);
  }
}

gugudan(2);
kukudan(3);

function businesscard() {
  let name = '김준수';
  let age = 25;
  let nickname = '김준자';

  console.log('이름: ' + name);
  console.log('직업: 작가');
  console.log('나이: ' + age);
  console.log(nickname + '은 제 별명입니다.');
}

businesscard();

let card = {
  name: '김준수',
  age: 25,
  job: 'writer',
  export() {
    console.log('이름: ' + this.name);
    console.log('나이: ' + this.age);
  },
};

card.export();

function price(a) {
  console.log(a);
}

let x = 300;
let y = 200;
let z = 100;

let omega = [100, 150, 200, 50];

price(omega);
console.log(omega[1]);

for (let i = 0; i < 10; i++) {
  price(omega[1]);
}

let parcels = [];
parcels.push('i-pad');
parcels.push('rice');
parcels.push('water');
parcels.push('piano');
parcels.pop();
parcels.pop();
let parcel = parcels.pop();

console.log(parcels);
console.log(parcel);

let boxes = ['box1', 'box2', 'box3'];
boxes.shift();
let mybox = boxes.shift();

console.log(boxes);
console.log(mybox);

let numbers = [1, 5, -10, 200, 40, 39, 400, 309, 56, 87];
function max_number(numbers) {
  let number = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (number < numbers[i]) {
      number = numbers[i];
    }
  }
  console.log(number);
}

console.log(numbers.length);
max_number(numbers);

function aldition(numbers) {
  let stacknumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    stacknumber = stacknumber + numbers[i];
  }
  console.log(stacknumber);
}

aldition(numbers);
