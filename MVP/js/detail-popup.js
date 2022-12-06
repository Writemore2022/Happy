const delBtn = document.getElementById("del_btn");
const wrap = document.getElementById("wrap");

delBtn.addEventListener('click', function() {
    wrap.style.display = "none";
    alert("삭제")
});