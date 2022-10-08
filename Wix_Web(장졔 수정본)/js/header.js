$(document).ready(function(){
  menu(); // hover 시 submenu가 보이고 hover 해제 시 submenu 사라짐 
})

function menu(){
    $("#gnb>li").hover(
        function(){ // mouseover(마우스 올릴 때)
            $("#lnb").stop().slideDown();
            // 중첩을 멈추고 밑으로 내려오도록
        },
        function(){ // mouseout(마우스 안 올릴 때)
            $("#lnb").stop().slideUp();
            // 중첩을 멈추고 위로 올라오도록 (서브메뉴 안보이게)
        }
    )
};