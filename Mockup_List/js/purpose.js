$(document).ready(function() {       
    $('.category-btn').on("click", function() {     //버튼 클릭시 호출되는 함수
        if($('.category-btn').hasClass("active")){
            $(this).removeClass('active');      //클릭된 버튼에 속성(class 삭제)
            alert("[" + $(this).val() + "] 카테고리 선택이 취소되었습니다."); 
        } else{
            $(this).addClass('active');      //클릭된 버튼에 속성(class 추가)
            alert("[" + $(this).val() + "] 카테고리가 선택되었습니다."); // 확인 용도
        }
    });
});