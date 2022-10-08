$(document).ready(function() {       
    $('.category-btn').on("click", function() {     //버튼 클릭시 호출되는 함수
          $(this).addClass('active');      //클릭된 버튼에 속성(class 추가)
        //   alert("[" + $(this).val() + "] 카테고리가 선택되었습니다.");   
        //클릭된 버튼의 value 값  alert 띄우기
    });
});