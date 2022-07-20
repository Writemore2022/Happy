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
