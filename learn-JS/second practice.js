// 변수 선언 시, 변하지 않는 값은 const / 변할 수 있는 값은 let

// 1. 변수는 문자와 숫자, $와 _만 사용
// 2. 첫 글자는 숫자가 될 수 없음
// 3. 예약어는 사용할 수 없음
// 4. 가급적 상수는 대문자로 선언
// 5. 변수명은 읽기 쉽고 이해할 수 있게 선언

const name = 'junsu'; // 문자형 String
const message = `My name is ${name}`; // `를 이용

const age = 25; // 숫자형 Number
console.log(9 + 3);

const x = 1 / 0;
console.log(x); // Infinity

const y = name / 2;
console.log(y); // NaN = not a number

//Boolean
const a = true; // 참
const b = false; // 거짓

console.log(age > 30); // false

// null and undefined
let agent;
console.log(agent); // undefined

let user = null; // 객체형 vs 심볼형

// typeof 연산자
console.log(typeof name);
console.log(typeof null);
console.log(typeof true);

const f = '나는 ';
const r = ' 입니다.';

console.log(f + name + r);

// 대화상자
// const info = prompt('입력하세요.'); // 정보 입력
// alert(info); // 정보 제공
// const isAdult = confirm('당신은 성인입니까?');

// 1. 스크립트 일시 정지
// 2. 스타일 적용 불가

// 형변환(Type Conversion)
// String() -> 문자형
// Number() -> 숫자형
// Boolean() -> 불린형

// const mathscore = prompt('수학 몇 점?');
// const engscore = prompt('영어 몇 점?');
// const result = (mathscore + engscore) / 2;

// console.log(result);

// prompt는 문자형으로 정보를 받음

console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
);

console.log(Number('1234'), Number('asdf'), Number(undefined), Number(null));

console.log(Boolean(3), Boolean(null), Boolean(undefined), Boolean('name'));

// 기본연산자 + - * /
// % 나머지 산출
// ** 거듭제곱
let num = 10;
num += 5;

console.log(num);

// 증가 연산자, 감소 연산자
let plus = ++num;
let minus = --num;

console.log(plus);
console.log(minus);

// 비교 연산자 < > <= >= == !=
console.log(10 > 5);
console.log(10 == 5); // 동등 연산자
console.log(10 != 5);

const n = 1;
const s = '1';

console.log(n == s);
console.log(n === s); // 일치 연산자

// 조건문 if, else
// if 이후 값은 boolean형
if (age <= 19) {
  console.log('감사합니다.');
} else if (age === 25) {
  console.log('새벽 코딩 공부는 아파.');
} else {
  console.log('안녕하세요.');
}

// 논리연산자 || && !
if (name === 'junsu' || age === 24) {
  console.log('합격');
} else {
  console.log('불합격');
}

if (name === 'junsu' && age === 24) {
  console.log('합격');
} else {
  console.log('불합격');
}

if (age !== 24) {
  console.log('합격');
} else {
  console.log('불합격');
}

const gender = 'M';

if (name === 'junsu' && (age === 24 || gender === 'M')) {
  console.log('합격');
} else {
  console.log('불합격');
}

// 반복문 for, while, do while
for (
  let i = 0; // 초기값
  i <= 10; // 조건
  i++ // 코드 실행 후 작업
) {
  console.log(i);
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

do {
  console.log(i * 2);
  i++;
} while (i <= 15); // 코드 실행 후 조건 설정

// break
// while (true) {
//   let answer = 'yes';
//   console.log('계속 할까요?');
//   if (!answer) {
//     break;
//   }
// }

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// switch

let fruit = 'C';

switch (fruit) {
  case 'A':
    console.log('100원');
    break;
  case 'B':
    console.log('100원');
    break;
  case 'C':
    console.log('안 팔아요.');
    break;
  default:
    console.log('미안.');
    break;
}

function showError() {
  console.log('에러가 발생했습니다. 다시 시도해주세요.');
  return;
  console.log('이 코드는 절대 실행되지 않습니다.');
}

showError();

let msg = 'Hello'; // 전역 변수 (global variable)

function sayHello(name = 'friend') {
  // 함수 선언문: 어디서든 호출 가능(hoisting)
  let msg = `hello, ${name}`; // 지역 변수 (local variable)
  console.log(msg);
}

sayHello();
sayHello('junja');

// return으로 값 반환
function add(num1, num2) {
  return num1 + num2;
}

const sum = add(9, 3);
console.log(sum);

let sayBye = function () {
  // 함수 표현식: 코드에 도달 시 함수 생성
  console.log('Bye');
};

let arrow = (num1, num2) => num1 + num2; // 화살표 함수 (arrow function)

const superman = {
  // object 생성
  name: 'clark',
  age: 33,
};

superman.name; // object 접근
superman.gender = 'male'; // object 추가
superman.color = 'red + blue';
delete superman.age; // object 삭제

console.log('gender' in superman);
console.log('age' in superman);

console.log(superman);

function makeObject(name, age) {
  return {
    name: name,
    age: age,
  };
}

const goods = makeObject('goods', 24);
console.log(goods);

function isAdult(user) {
  if (!('age' in user) || user.age < 20) {
    return false;
  }
  return true;
}

console.log(isAdult(goods));

for (g in goods) {
  console.log(goods[g]);
}

// object method: object property로 할당된 function
const boy = {
  name: '재화',
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`); // 지역 개체의 this
  },
};

sayHello: () => {
  console.log(`Hello, I'm ${this.name}`); // 전역 개체의 this
};
// 화살표 함수는 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져 옴

let man = boy;

// 배열(array): 순서가 있는 리스트
let JeoMoon = ['정윤', '재화', '현진', '혜정', '은지', '지예', '준수'];
// index는 입력한 순서대로 0 ~ 6

console.log(JeoMoon[6]);
console.log(JeoMoon.length);

// push(): 배열 끝 요소 추가
// pop(): 배열 끝 요소 제거
// unshift(): 배열 앞 요소 추가
// shift(): 배열 앞 요소 제거

let days = ['월', '화', '수', '목', '금'];

days.push('토');
days.unshift('일');

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

for (let day of days) {
  // for ... of
  console.log(day);
}
