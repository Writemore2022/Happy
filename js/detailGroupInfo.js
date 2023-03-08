let li_1 = document.getElementById("list1");
let li_2 = document.getElementById("list2");
// let li_3 = document.getElementById("list3");

let title = document.getElementById("g-title");
let story = document.getElementById("g-story");

// function btn(){
//     alert('예약하기 창, 준비 중 입니다.');
// }

let arr_story = [`안녕하세요.<br>
드디어 그림책방을 갖게된 정윤입니다.💜<br>
<img src="./assets/images/sample2.jpg" width="80%" height="40%"/> <br>
그림책은 그림과 그림사이, 단어와 단어사이 여백이 가득가득한 책이에요.<br>
그래서 읽는 동안 혼잣말로 그 사이를 채우기도 하고 잠시 멈춰 옛날 일을 떠올리기도 하죠. <br><br>
아! 모든 그림책을 읽고 다 그러는 것은 아니에요.<br>
마음이 닿은 그림책이 이런 신비한 일을 가능하게하죠.<br><br>
이렇게 읽게된 그림책은 이제 더이상 ‘그냥 그림책’이 아니게 된답니다.<br><br>
<u>‘내가 읽은 그림책’이 되어버리죠.</u> <br><br>
똑같은 그림책을 읽더라도 각자의 경험, 생각, 감정들이 다르기 때문에 함께 나눌 때는 각자 다른 감상들을 뱉어내게 되는거죠.<br>
<img src="./assets/images/sample3.jpg" width="80%" height="40%"/> <br>
나의 생각을 말하고 남의 생각을 듣다보면 ‘어? 나 왜이렇게 생각하고 있지?’ 혹은 ‘저사람은 어떻게 이렇게 생각을 하지?’ 의문이 들때가 있을 거에요.<br><br>
저희는 그 ‘다른’ 이야기를 더 듣고 나눌 거에요.🙌 <br><br>
몇권을 함께 읽고 나누다보면 어느새 나만의 생각이 정리되는 분들도, 이 시간이 따뜻했던 분들도, 혹은 뭔가 마음이 불편하신 분들도 있을 거에요. <br><br>
그렇게 시간이 끝나고 집에 돌아갈 때 조금만 더 함께한 시간을 생각해주세요. <br><br>
언젠가 오늘 그림책을 통해 나의 세계를 만났던 경험이 위안이 되기를 바라며 열심히 준비하고 기다리고 있을게요.🙏 <br><br><br><br>`, 
`<br>
<h3>이런 분과 함께하고 싶어요.</h3> <br>
<li>- 나의 이야기를 마주할 준비가 되신 분</li>
<li>- 그림책을 좋아하시거나 궁금하신 분</li>
<li>- 서로의 이야기를 들을 준비가 된 어른이들!</li>
<br><br>
------------------------------------------------------------------------------
<br><br>
<h3>제공사항</h3> <br>
<li>- 그날의 추천티와 다과 (커피랑 물은 당연히 준비되어있어요!)</li>
<li>- 오늘간직하기 프로그램에 필요한 준비물</li>
<br><br>
------------------------------------------------------------------------------
<br><br>
<h3>준비물</h3> <br>
불리고 싶은 닉네임이나 이름, 기대하는 점을 간단하게 생각 해 와 주세요;-)
<br><br>
------------------------------------------------------------------------------
<br><br>
<h3>진행 사항</h3> <br>
<span style="font-weight: bold;">1. 그림책을 읽어드려요.</span> <br> 
'정윤'이 그림책을 읽어드리고, 몇가지 질문들을 나누는 시간<br><br>
<span style="font-weight: bold;">2. 그림책을 읽으며 지금-여기에 집중 해 볼까요?</span> <br> 
‘정윤’이 추천한 그림책과 책장에서 끌리는 그림책을 읽고 떠오르는 느낌들을 메모하며 읽는 시간<br><br>
<span style="font-weight: bold;">3. 저는 이 그림책이 마음에 닿았어요!</span> <br> 
그림책을 읽으면서 마음에 닿았던 그림책을 소개 해 주고 그림책에 대하여 함께 이야기를 나누는 시간<br><br>
<span style="font-weight: bold;">4. 오늘을 간직해 볼까요?</span> <br> 
가장 마음에 닿았던 그림책을 필사하거나, 그림을 그리고 꾸미는 시간<br><br>
<br><br>`, ];

li_1.addEventListener('click', () => {
    title.innerHTML = li_1.innerText
    story.innerHTML = arr_story[0]
})

li_2.addEventListener('click', () => {
    title.innerHTML = li_2.innerText
    story.innerHTML = arr_story[1]
})

// li_3.addEventListener('click', () => {
//     title.innerHTML = li_3.innerText
//     story.innerHTML = arr_story[2]
// })