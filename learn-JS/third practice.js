// 변수 (variable) => let, const, (var)
// var는 기존 변수를 다시 선언 가능 / let은 불가능
// var는 호이스팅 가능 but, 선언만 호이스팅 되고 할당은 해당되지 않음
// 호이스팅: scoped 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// const와 let, class 등은 Temporal Dead Zone (TDZ)에 영향을 받음
let errorAge = 30;

function showAge() {
  // console.log(age); // Temporal Dead Zone

  let errorAge = 20;
}

showAge();

// 변수의 생성과정: 1. 선언 단계 -> 2. 초기화 단계 -> 3. 할당 단계
// 초기화 단계에서는 변수를 undefined로 설정하는 단계
// var는 1, 2단계가 동시에 발생하며, const는 모든 단계가 동시에 발생
// const A = x; (선언, 초기화, 할당을 동시에 입력해야 함)
// var는 function-scoped / let과 const는 block-scoped
// 함수이외의 if 문, for 문 등에서 선언한 var 변수는 전역변수가 됨
// block-scoped는 함수, if 문, for 문 등에서 선언한 변수는 지역변수가 됨
// function-scoped 또한 함수 내에서 선언한 변수는 지역변수가 됨

// 생성자 함수 selector function
// 유사한 여러 개의 객체 리터럴(object literal)을 생성할 때 사용
function User(name, age) {
  // 생성자 함수의 첫 글자는 대문자로 선언하는 것이 관례
  // this = {};
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };

  // return this;
  // 주석화된 문장은 연산자 new에 의해 대체될 수 있음
}

let user1 = new User('Junsu', 25); // new 연산자를 통해 호출
let user2 = new User('Junja', 21);

console.log(user1, user2);
user2.sayName();

// Computed property
// [x]와 같이 대괄호를 이용하여 변수 x의 할당을 입력할 수 있음
let a = 'age';

const testAge = {
  [a]: 25, // age: 25
};

// Object method
// Object.assign(): 객체 복제
const newUser = Object.assign({}, user1);

const info1 = {
  age: 25,
};
const info2 = {
  gender: 'male',
};

Object.assign(user2, info1, info2);
console.log(user2);

// Object.keys(): 키 배열 반환
Object.keys(user2); // ["name", "age", "gender"]

// Object.values(): 값 배열 반환
Object.values(user2); // ["Junja", 25, "male"]

// Object.entries(): 키/값 배열 반환
Object.entries(user2); // [ ["name", "Junja"], ["age", 25], ["gender", "male"] ]

// Object.fromEntries(): 키/값 배열을 객체로
const arr = [
  ['name', 'Goods'],
  ['age', 24],
  ['gender', 'male'],
];

const goods = Object.fromEntries(arr); // Object.entries의 반대
console.log(goods);

// 심볼 (Symbol): 유일한 식별자를 생성할 떄 사용 => 유일성 보장
// property key: 문자형 (String) 또는 심볼형 (Symbol)
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id === id2);

user2[id] = 'myid';
console.log(user2);

// Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// Symbol 함수는 매번 다른 Symbol 값을 생성
// Symbol.for method는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const idA = Symbol.for('ID');
const idB = Symbol.for('ID');

console.log(idA === idB);

Symbol.keyFor(idA); // 전역 심볼인 경우에만 사용 가능

console.log(idA.description); // description

console.log(Object.getOwnPropertySymbols(user2)); // [Symbol(id)]
console.log(Reflect.ownKeys(user2)); // ["name", "age", Symbol(id)]

// toString(): 10진수를 2진수 또는 16진수로 변환
let num = 10;

num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;

num2.toString(16); // "ff"

// Math method
console.log(Math.PI);

// Math.ceil(): 올림
// Math.floor(): 내림
// Math.round(): 반올림
let userRate = 39.1234;

console.log(Math.round(userRate * 100) / 100); // 소수점 둘째 자리까지 표현

// toFixed(): 소수점 자릿수
Number(userRate.toFixed(2)); // 문자열을 숫자열로 변환
console.log(userRate.toFixed(2));

// isNaN()
// perselnt()
let margin = '20px';

console.log(parseInt(margin));
console.log(parseInt(margin, 16));
// parseFloat()
let padding = '18.5%';

console.log(parseFloat(padding));

// Math.random(): 0 ~ 1 사이의 무작위 숫자
console.log(Math.floor(Math.random() * 100) + 1); // 1 ~ 100 사이의 무작위 숫자

// Math.max(): 괄호 내의 숫자 중 최댓값
// Math.min(): 괄호 내의 숫자 중 최솟값
// Math.abs(): 절대값
// Math.pow(n, m): n^m
// Math.sqrt(): 제곱근

// 문자열 입력 시 ' 또는 "의 경우는 유사하여 상황에 따라 유동적으로 이용
// `의 경우 문자열 내에 표현식을 넣거나 여러 줄의 문자열 삽입 시 이용
// length를 통해 문자열의 길이를 반환
// toUpperCase(): 모든 영문을 대문자로 / toLowerCase(): 모든 영문을 소문자로
// str.indexOf('text'): 문장 내에 해당 단어의 순서를 반환
// str.slice(n, m): n번째 순서의 문자열부터 (m-1)번째 순서의 문자열까지 반환
// str.substring(n, m): n과 m 사이의 문자열을 반환
// str.substr(n, m): n번째 순서의 문자열부터 순서대로 m개를 반환
// str.trim(): 앞과 뒤의 공백 제거
// str.repeat(n): 문자열을 n번 반복

let list = [
  '01. 7월 11일',
  '02. 오늘도 글플',
  '03. 비가 오는 날',
  '04. 열심히 하자',
  '05. 너무 심심해',
];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}

console.log(newList);

// 금칙어: 담배

function noSmoking(str) {
  if (str.indexOf('담배') > -1) {
    console.log('담배는 몸에 좋지 않아요!');
  } else {
    console.log('너넨 이런거 하지 마라...');
  }
}

noSmoking('벌써 담배를 끊은지 일주일...');
noSmoking('생각보다 평범한 하루'); // -1
noSmoking('담배보다는 술이 더 생각 나.'); // 0

// 금칙어: 술

function noDrink(str) {
  if (str.includes('술')) {
    console.log('술도 몸에 좋지 않아요!');
  } else {
    console.log('그럼에도 나는...');
  }
}

noDrink('벌써 담배를 끊은지 일주일...');
noDrink('술이 없는 일주일을 생각할 수 있을까?'); // -1
noDrink('담배보다는 술이 더 생각 나.'); // 0

// Array method
// arr.splice(n, m): 배열의 n번째부터 m개의 요소 제거
// arr.splice(n, m, x): 배열의 n번째부터 m개의 요소 제거 후 그 자리에 x 삽입
// arr.splice()는 삭제된 요소를 반환
// arr.slice(n, m): 배열 중 n번째부터 m번째 요소까지 반환
// arr.concat(arr2, arr3, ...): 배열을 조합하여 새 배열을 반환
// arr.forEach(function): 배열 반복
let items = ['cup', 'paper', 'pen'];

items.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// arr.indexOf(n, m): m번째부터 n에 해당하는 요소의 순서를 반환
// arr.lastIndexOf(n): 배열을 반대로 읽어 n에 해당하는 요소의 순서를 반환
// arr.includes(): 배열 내의 해당 요소를 파악
// arr.find(function) / arr.findIndex(function)
let numbers = [1, 2, 3, 4, 5];

const result = numbers.findIndex((number) => {
  return number % 2 === 0;
});

console.log(result);

let userList = [
  { name: '지예', age: 22 },
  { name: '혜정', age: 24 },
  { name: '준수', age: 25 },
];

const listAdd = function (a, b) {
  userList.push({ name: `${a}`, age: b });
};

userList.push({ name: '정윤', age: 24 });
listAdd('재화', 24);
listAdd('현진', 24);

console.log(userList);

const listFind = userList.find((user) => {
  if (user.age < 23) {
    return true;
  }
  return false;
});

console.log(listFind);

// arr.filter(function): 함수에 만족하는 모든 요소를 배열로 반환
const listFilter = userList.filter((user) => {
  if (user.age > 23) {
    return true;
  }
  return false;
});

console.log(listFilter);

// arr.reverse(): 배열을 역순으로 재정렬
// arr.map(function): 함수를 통해 특정 기능을 시행하여 새로운 배열을 반환
const listMap = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(listMap);

// join, split
let arrJoin = ['12시는', '배고픈', '시간이야'];
let strSplit = '1시까지 내가 버틸 수 있을까?';

let resultJoin = arrJoin.join(' ');
let resultSplit = strSplit.split(' ');

console.log(resultJoin);
console.log(resultSplit);

// Array.isArray()
console.log(Array.isArray(user1));
console.log(Array.isArray(userList));

// arr.sort(): 배열 재정렬
// 인수로 정렬 로직을 담은 함수를 받음
let arrSort = [39, 3, 9, 93];

arrSort.sort((a, b) => {
  console.log(a, b);
  return a - b; // a가 클 경우
});
// 'Lodash' extention을 이용할 경우, _sortBy(arr);를 통해 구현 가능

console.log(arrSort);

// 배열의 모든 수 합치기

let arrSum = [1, 2, 3, 4, 5];

let resultSum = 0;
arr.forEach((num) => {
  resultSum += num; // resultSum = resultSum + num;
});

// arr.reduce(a, b): 이전 값들을 더한 누적계산값인 a에서 현재값인 b를 더함

let resultReduce = arrSum.reduce((prev, cur) => {
  return prev + cur;
}, 0); // 초기값 = 0

console.log(resultReduce);

let listReduce = userList.reduce((prev, cur) => {
  if (cur.age > 23) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(userList);
console.log(listReduce);

// 구조 분해 할당 (Destructuring assignment)
// 배열이나 객체의 속성을 분해하여 얻은 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
let notes = ['galaxy', 'SSS', 'flip'];
let [note1, note2, note3, note4 = 'apple'] = notes; // 기본값 제공 가능

console.log(note1);
console.log(note4);

[note2, note3] = [note3, note2];
console.log(note3);

// 객체 구조 분해
console.log(user2);

let { name: userName, age: userAge } = user2;
console.log(userName);

let { name, age, hobby = 'writing' } = user2;
console.log(hobby); // 이거 이해 안 돼...

// 인수 전달
function showName(name) {
  console.log(name);
}

showName('준수', '준자'); // 인수의 개수 제한이 없음

// arguments: 함수 내에서 이용 가능한 지역 변수
// length와 index 속성이 있으며, array 형태의 객체
// 함수로 넘어 온 모든 인수에 접근

function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName('준수', '준자');

// 나머지 매개변수 (Rest parameters)
function add(...numbers) {
  // let result = 0;
  // numbers.forEach((num) => (result += num));
  let result = numbers.reduce((prev, cur) => prev + cur);
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function Item(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const item1 = new Item('snow', 5, 'clean', 'vibration');
const item2 = new Item('leaf', 7, 'wild');
const item3 = new Item('beer', 3, 'fresh', 'dry');

console.log(item1);
console.log(item2);
console.log(item3);

// 전개 구문 (Spread syntax)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let resultArr = [0, ...arr1, ...arr2, 7, 8, 9];

console.log(resultArr);

let user3 = { ...user1 };
user3.name = 'jnsia';

console.log(user3.name);

// 클로저 (Closure): 함수와 lexical 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능

// 어휘적 환경 (Lexical Environment)
// 전역 Lexical 환경과 내부 Lexical 환경
function makeCounter() {
  let num = 0; // 은닉화

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// setTimeout: 일정 시간이 지난 후 함수를 실행
setTimeout(function () {
  console.log(3);
}, 0); // 3초

setTimeout(showName, 0, 'junsu', 'jnsia');

// clearTimeout(A): 변수 A로 지정된 setTimeout을 취소

// setInterval: 일정 시간 간격으로 함수를 반복
// clearInterval(A): 변수 A로 지정된 setTimeout을 취소
let i = 0;

function alone(name) {
  console.log(`${name}... 언제 와~?`);
  i++;

  if (i > 1) {
    clearInterval(tId);
  }
}

const tId = setInterval(alone, 30000, '다들');

// call: 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정 가능
const I = {
  name: 'Kim Junsu',
};

function showThisName() {
  console.log(this.name);
}

showThisName(I);
showThisName.call(I);

function Update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

Update.call(I, 1998, 'writer');

console.log(I);

// apply: 함수의 매개변수를 처리하는 방법을 제외하면 call과 같음
// apply는 매개변수를 배열로 받음

Update.apply(I, [1998, 'writer']);

console.log(I);

console.log(numbers);

const minNum = Math.min.call(null, ...numbers);
const maxNum = Math.max.apply(null, numbers);
// this가 지정하는 인수가 없기 때문에 null을 사용

console.log(minNum);
console.log(maxNum);

// bind: 함수의 this 값을 영구히 바꿀 수 있음
const updateI = Update.bind(I);

updateI(2002, 'dreamer');

console.log(I);

// 상속, prototype
const you = {
  name: 'MJ',
  age: 21,
  //   hasOwnProperty: function () {
  //     console.log('HAHA');
  //  },
};

const love = {
  emotion: 'love',
  navigation: 1,
};

const funny = {
  emotion: 'funny',
  navigation: 2,
};

// you.hasOwnProperty();

console.log(you.hasOwnProperty('name'));

love.__proto__ = you;
funny.__proto__ = you;

console.log(love.emotion);
console.log(funny.age);

const pretty = {
  color: 'white',
  navigation: 1,
};

pretty.__proto__ = love;

console.log(pretty.navigation);

for (p in pretty) {
  if (pretty.hasOwnProperty(p)) {
    console.log('o', p);
  } else {
    console.log('x', p);
  }
}

const Love = function (emotion) {
  this.emotion = emotion;
};

Love.prototype.people = 5;
Love.prototype.sayHello = function () {
  console.log('Hello!');
}; // prototype 내부에 함수가 포함

Love.prototype.navigation = 1;
Love.prototype.sayBye = function () {
  console.log('Bye~');
};

const trust = new Love('trust');

// trust.__proto__ = love;

console.log(trust);
console.log(trust instanceof Love); // 객체와 생성자를 비교
console.log(trust.constructor); // 객체의 생성자를 반환

// Class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
  // prototype 내부에 함수가 포함
}

const john = new Pet('john', 5);

john.showName();
console.log(john);

// class 상속
class Cat extends Pet {
  nya() {
    console.log('nya~ nya~');
  }
  showName() {
    super.showName(); // super.function()을 통한 부모요소의 함수 표현
    console.log(`my name is ${this.name}.`);
    // 메소드 오버라이딩 (method overriding) => 덮어쓰기
  }
}

class Dog extends Pet {
  constructor(...args) {
    super(...args);
    this.navigation = 1; // 오버라이딩 (overriding)
  }
  mung() {
    console.log('mung! mung!');
  }
}

const nabi = new Cat('nabi', 3);
const baduk = new Dog('baduk', 5);

console.log(nabi.showName());
console.log(baduk);

// 프로미스 (Promise)
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 1000);
});
// resolve: 성공하였을 경우 / reject: 실패하였을 경우 => call back
// promise는 state와 result를 property로 보유
// state: pending(대기) -> fullfilled(이행) 또는 rejected(거부)
// result: undefined -> value 또는 error

pr.then(
  function (result) {
    console.log(result + ' 가지러 가자.');
  }, // 이행 되었을 경우 실행
  function (err) {
    console.log('다시 주문해주세요...');
  } // 거부 되었을 경우 실행
);

pr.then(function (result) {
  console.log(result + ' 가지러 와요.');
})
  .catch(function (err) {
    // .catch를 사용하는 것이 가독성에 유리
    console.log('다시 주문해주세요...');
  })
  .finally(function () {
    // .finally는 .then 수행 후 무조건 실행
    console.log('--- 주문 끝 ---');
  });

const f1 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 주문 완료');
      // rej('2번 주문 실패')
    }, 2000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 3000);
  });
};

// 프로미스 체이닝 (promise chaining)
console.time('x');
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log('끝');
    console.timeEnd('x');
  });

// Promise.all
console.time('y');
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd('y');
});

// Promise.race
console.time('z');
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd('z');
});

// async: 항상 Promise로 반환
async function getHungry(state) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(state);
    }, 4000);
  });
}

console.log(getHungry("I'm hungry."));

getHungry().then((hungry) => {
  console.log(hungry);
});

// await: Promise의 반환값을 기다림
async function showHungry() {
  const soHungry = await getHungry('So hungry...');
  console.log(soHungry);
}

showHungry();

async function order() {
  try {
    // try 영역을 시도
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    // async와 await 사용 시 가독성에 더 유리
    console.log(result3);
  } catch (e) {
    // 에러 발생 시 수행
    console.log(e);
  }
  console.log('배고파');
}

order();

// Gererator: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(), return(), throw()
function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return 'finish';
  } catch (e) {
    console.log(e);
  }
}

const generator = fn();

console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.return('END'));
console.log(generator.next());

// iterator: next method를 가지며, value와 done 속성을 가진 객체를 반환함
// iterable: Symbol.iterator method가 있으며, iterator를 반환해야 함
const iterator = [1, 2, 3, 4, 5];
const it = iterator[Symbol.iterator]();
console.log(it.next());
console.log(it.next());

for (let num of iterator) {
  console.log(num);
}

console.log(generator[Symbol.iterator]() === generator);

const hello = 'hello';
const hi = hello[Symbol.iterator]();

console.log(hello[Symbol.iterator]);
console.log(hi.next());
console.log(hi.next());

for (let str of hello) {
  console.log(str);
}

function* infinite() {
  let index = 0;
  while (true) {
    yield index++;
  }
} // while(true)와 같이 무한 반복문은 generator가 사용되어야 함

function* gen1() {
  yield 'w';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'hello,';
  yield* gen1();
  yield '!';
}

console.log(...gen2());
