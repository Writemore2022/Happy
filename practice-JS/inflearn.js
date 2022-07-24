// JS는 html 문서를 제어하기 위한 언어!
// 브라우저에는 html 문서를 해석하는 렌더링 엔진이 있음
// 렌더링 엔진은 문서를 객체화하여 DOM(문서 객체 모델)을 만듦
// DOM은 tree 구조를 가짐 => 각 노드에 1) 접근하여 2) 제어한다
// document 객체는 DOM의 최상위 노드

//      document.childNodes[1].childNodes[2].childNodes[1].textContent = '제목입니다';
//      let domObject = document.querySelector('h1');
//      domObject.textContent = '제목이에요 :)';

// --------------------------------------------------

// BOM(브라우저 객체 모델): 브라우저 자체를 제어

// window: 모든 객체가 소속된 객체이며, 브라우저 창을 의미함
//      window.open('http://www.google.com');
//      window.close('http://www.google.com');
//      window.alert('경고!');
//      window 생략 가능

// document: 현재 문서에 대한 정보를 갖고 있는 객체
//      document.querySelector('#custom-id')
//      document.querySelector('#custom-id').textContent = '원하는 텍스트'

// history: 현재 브라우저가 접근했던 URL history를 제어할 수 있음
//      history.back()
//      history.forward()

// location: 문서의 주소와 관련된 객체
//      window 객체의 property인 동시에 document 객체의 property
//      window.location과 document.location 둘 다 가능
//      location.host
//      location.href = 'http://www.google.com'

// screen: 사용자의 디스플레이 화면에 대한 다양한 정보를 갖고 있는 객체
//      console.dir{screen}

// navigator: 실행 중인 브라우저에 대한 정보를 알 수 있음
//      navigator.geolocation.getCurrentPosition(): 현재 브라우저에 대한 위치정보
//          navigator.geolocation.getCurrentPosition(function (pos){
//              ...code
//          })
//      navigator.appName: 브라우저 이름을 반환
//      navigator.appVersion: 브라우저에 대한 버전 정보를 반환
//      navigator.userAgent: 서버에 요청할 때 브라우저에 대한 정보

// 추가적인 정보는 MDN 사이트에서 볼 수 있음

// --------------------------------------------------

let warning = document.querySelector('#warning');
warning.addEventListener('click', function () {
  alert('WARNING!!!');
});

// html에서 script는 head 영역에서 먼저 선언되기 떄문에 script 로드가 정상적으로 수행되지 않음

// script 태그의 위치를 아래로 내려서 해결

// load 이벤트 리스너 등록을 통해 해결
//      window.onload: html parsing, DOM 생성, 외부 컨텐츠 로드 후 발생하는 이벤트
window.onload = function () {
  let hello = document.querySelector('#hello');
  hello.addEventListener('click', function () {
    alert('HELLO!');
  });
};
//      DOMContentLoaded: html parsing과 DOM 생성 후 발생하는 이벤트
document.addEventListener('DOMContentLoaded', function () {
  let bye = document.querySelector('#bye');
  bye.addEventListener('click', function () {
    alert('bye...');
  });
});

// HTML5 script 로드 해결 방법
//      defer 속성: html parsing과 동시에 비동기로 JS 파일을 로드하며, parsing이 끝난 후 script 실행
//          <script src="./inflearn.js" defer></script>
//      async 속성: html parsing과 동시에 비동기로 JS 파일을 로드하며, script 실행 시 parsing이 멈춤
//          <script src="./inflearn.js" async></script>

// --------------------------------------------------

// this: 객체를 가르키는 키워드? 호출한 놈?
//      대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정
//      호출한 놈이 없으면 window 객체
let person = {
  fullname: 'Junsu Kim',
  age: 25,
  printThis: function () {
    console.log(this);
    console.log('this === person:', this === person);
    console.log('this === global:', this === global);
  },
  hi: function () {
    function printHi() {
      console.log('HI!');
      console.log(this.fullname);
    }
    setTimeout(printHi.bind(this), 1000);
  },
};

// person.printThis();
let printThis = person.printThis;
printThis(); // 객체가 지정되지 않을 경우 this는 전역 객체의 this로 지정됨

let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  console.log(this);
  console.log(this == btn);
});

// ESS bind method: this를 임의로 설정할 수 있게 함
let printThises = printThis.bind(person);
console.log(printThises);

person.hi();

// Arrow function에서의 this는 외부 scope에서 this를 계승받음
let personed = {
  fullname: 'Junja Kim',
  age: 21,
  hi: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
  printBye: () => {
    console.log(this);
  }, // 이런 경우 this는 전역 객체의 값이 되기 때문에 화살표 함수 사용이 제한
};

personed.hi();
personed.printBye();

// Strict mode에서는 this 값이 없을 경우 기본값을 global이 아닌 undefined로 설정
// 'use strict';

// function sayHi() {
//   console.log(this);
// }

// sayHi();

// --------------------------------------------------

// API(Application Programming Interface)
//      운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스

// Interface: 상호 간의 소통을 위해 만들어진 접점
// curl http://api.data.go.kr => HTTP API
// (백엔드) DB 서버 -> API 서버 -> (프론트엔드) 앱, 웹
// Private API vs Public(Open) API

// --------------------------------------------------

// 동기(Synchronous): 결과를 기다리는 것 (blocking) => 단순하지만 비효율적
// 비동기(Asynchronous): 결과를 기다리지 않는 것 (non-blocking) => 효율적이지만 복잡함

// function A계좌로_인출하기() {
//    console.log('A계좌 인출하기.')
// }

// function B계좌로_인출하기() {
//    console.log('B계좌 송금하기.')
// }

// function 업무_프로세스() {
//     A계좌로_인출하기();
//     B계좌로_송금하기();
// }

// 동기식 프로세스

// --------------------------------------------------

// 프론트엔드: client => 사용자 인터페이스를 통해 server에 요청
// 백엔드: server => API를 이용하여 요청에 대해 client에 응답

// 배치 프로그램: 정기적으로 실행되는 프로그램

// 웹에서만 프론트엔드, 백엔드라는 개념이 존재
// 웹 개발 방식의 분리 구조가 강력해지면서 웹 개발 영역이 구분되기 시작

// --------------------------------------------------

// 이벤트 전파(Event phase)
//      최상위 요소인 html부터 해당 이벤트가 발생한 요소로 내려감 => 버블링(bubbling)
//      그후 다시 최상위 요소로 올라감 => 캡쳐링(capturing)
//      addEventListener('', function(){})는 버블링으로 동작
//      addEventListener('', function(){}, true)는 캡쳐링으로 동작
//      Event.eventPhase: 이벤트 흐름 단계를 나타냄
//      event.stopPropagation(): 캡쳐링 또는 버블링이 일어나지 않게 함

// --------------------------------------------------

// Array API
// map(): 배열 내의 모든 요소에 대하여 함수를 호출한 결과를 모아 새로운 배열로 반환
const numbers = [1, 2, 3, 4, 5, 6, 7];

const resultMap = numbers.map((number) => {
  return number * 2;
});

console.log(resultMap);

class Student {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

const student1 = new Student('김준수', 90, 95, 75);
const student2 = new Student('곽재화', 90, 95, 75);
const student3 = new Student('황정윤', 70, 85, 75);

const students = [student1, student2, student3];

console.log(
  '영어점수: ',
  students.map((student) => student.english)
);

// some(): 배열 내의 어떤 요소라도 판별 함수를 통과하는지 테스트
console.log(
  numbers.some((number) => {
    number >= 8;
  })
);

// export const fluits = ['사과', '딸기', '배', '참외', ' 딸기', '수박'];
// import { fluits } from './inflearn-data';

const fluits = ['사과', '딸기', '배', '참외', '딸기', '수박'];

console.log(
  fluits.some((fluits) => {
    fluits === '배';
  })
);

// every(): 배열 내의 모든 요소가 판별 함수를 통과하는지 테스트
console.log(students.every((student) => student.math == 75));

// filter(): 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
console.log(numbers.filter((number) => number % 2 === 0));
console.log(numbers.filter((number) => number % 2 === 1));

console.log(students.filter((student) => student.korean >= 90));

// reduce(): 배열의 각 요소에 대해 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환
//      리듀서 함수: 누적 값(acc), 현재 값(cur), 현재 인덱스(idx), 원본 배열(src)
//      반환 값은 누적 값에 할당되고 결과 값은 누적 값이 됨
const resultReduce = numbers.reduce((acc, cur, idx, src) => {
  console.log('acc: ', acc, 'cur: ', cur, 'idx: ', idx);
  return acc + cur;
}, 0);

console.log(resultReduce);

const resultFluits = fluits.reduce((acc, cur) => {
  console.log('acc: ', acc, 'cur: ', cur);
  if (acc.includes(cur) === false) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(resultFluits);

// --------------------------------------------------

// 모듈(Module): 메인 js 파일에서 분리된 하나의 파일
//      유지보수용이: 기능들의 모듈화는 의존성을 줄여 기능 개선과 수정에 용이
//      네임스페이스화: 모듈만의 네임스페이스를 갖게 되면 변수명이 겹치는 것을 막음
//      재사용성: 같은 코드를 반복하지 않으며, 필요할 때마다 재활용 가능

// Module system: 모듈을 효과적으로 분리할 수 있는 방법
//      AMD
//      Common JS: Node.JS 환경을 위해 만들어진 module system
//      UMD
//      ES Module: ES6에 도입된 JavaScript module system

// ES Module => 프론트엔드에서 주로 사용하며, NodeJS에서도 사용 가능
//      <script> 태그에 type="module" 속성을 추가하면 파일은 모듈로서 동작
//      export와 default export와 같은 키워드를 통해 내보내기
import { perfectScore, sum, avg } from './module practice.js'; // 함수 각각 지정

console.log('perfectscore: ', perfectScore);
console.log('sum: ', sum(80, 10));
console.log('avg: ', avg(80, 90));

import * as math from './module practice.js'; // 별칭 지정

console.log('perfectscore: ', math.perfectScore);
console.log('sum: ', math.sum(80, 10));
console.log('avg: ', math.avg(80, 90));

import subtract from './module practice.js';

console.log('subtract: ', subtract(80, 40));

// Common JS
//      exports와 module.exports와 같은 키워드를 사용하여 내보내기
//      require를 사용하여 불러오기
const { perfectScore, sum, avg, subtract } = require('./module practice2');

console.log('perfectscore: ', perfectScore);
console.log('sum: ', sum(80, 10));
console.log('avg: ', avg(80, 90));
console.log('subtract: ', subtract(80, 40));

const math = require('./module practice2');

console.log('perfectscore: ', math.perfectScore);
console.log('sum: ', math.sum(80, 10));
console.log('avg: ', math.avg(80, 90));
console.log('subtract: ', math.subtract(80, 40));

// --------------------------------------------------

// NPM(Node Package Manager): 모듈을 쉽게 다운로드 받을 수 있는 도구
//      자주 사용하는 모듈을 모듈 저장소에 저장하고 npm install을 사용하여 불러오기
// Node.js: JavaScript 런타임 환경

// package.json: 프로젝트에 대한 정보를 갖고 있는 파일
//      dependencies 속성을 활용하여 의존된 라이브러리를 관리
//      직접 작성할 수도 있고, npm init을 사용하여 작성할 수 있음

// node_modules: package.json에 있는 모듈이 의존하고 있는 모듈 전부가 설치된 디렉토리
// package-lock.json: 프로젝트에 설치된 모듈들의 의존성 트리를 기록

// npm init: 새로운 패키지를 시작할 때 사용하는 명령어 => package.json 파일을 생성
//      npm init -y: 기본값을 자동으로 설정
// npm install <package> (축약 i): 패키지를 설치하는 명령어 (로컬 설치)
//      npm install <package@version>: 특정 버전 설치
//      npm install --save (축약 S): dependencies에 추가 (default)
//      npm install --save-dev (축약 D): devDependencies에 추가
//      npm install <package1> <package2>: 여러 패키지를 설치
//      npm install -global <package> (축약 g): 전역 설치
//      npm install: package.json에 설정된 모든 package를 설치
//      npm install --production: package.json에 설정된 모든 package를 설치 (devDependencies 제외)
// npm unistall <package>: 로컬 package 제거
//      npm unistall -g <package>: 전역 package 제거
// npm update <package>: 설치한 package를 업데이트
// npm root: 로컬 package 설치 디렉토리 확인
//      npm root -g: 전역 package 설치 디렉토리 확인
// npm ls: 로컬 설치된 package 확인
//      npm ls -g: 전역 설치된 package 확인
// npm start: package.json 파일의 script 속성의 start 실행
// npm run <script-name>: package.json 파일의 script 속성의 start와 스크립트 실행

// npm command에서 추가적인 정보 획득 가능

// 전역설치는 시스템 상에서 해당 라이브러리의 명령어를 인식하도록 설정하기 위함
// linux와 mac os의 경우 명령어 앞에 sude를 붙여 관리자 권한으로 실행
// 윈도우의 경우 cmd 실행 시 마우스 우클릭 후 관리자 권한으로 실행을 클릭

// 버전은 [MAJOR, MINOR, PATCH]로 구성 => 시멘틱 버저닝 (Semantic versioning)
//      MAJOR: 주요 변화, 기존 API 추가/변경/삭제 등 => 이전 버전과 호환이 안 될 수 있음
//      MINOR: 기능 추가, 이전 버전과 호환됨
//      PATCH: 버그 수정, 이전 버전과 호환됨

// --------------------------------------------------

// 모듈을 계속 분리하면 페이지 로딩 시간을 증가시켜 사용자 경험에 영향을 줄 수 있음
//      웹 페이지 배포 시 모듈을 하나의 파일로 묶어야 함 => 모듈 번들러를 통한 번들링
// 웹 팩 (Webpack): 여러 개의 파일을 하나로 묶어주는 모듈 번들러
//      html, css, img도 번들링 가능
