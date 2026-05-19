// 전역변수
const filterlib =  document.querySelector(".filter-library");
const filterTit =  document.querySelector(".filter-tit");
const filterBtn = document.querySelector(".search-btn"); //검색버튼
const searchTxt = document.querySelector(".search-txt"); //검색 인풋
//도서관 필터
filterlib.addEventListener("click", (e) => {
    const clickedLi = e.target.closest("li"); 
    const allLib = filterlib.querySelectorAll("li");
    const pickLib = filterlib.querySelectorAll("li.show");
    filterlib.classList.add("open");
    if (!clickedLi) return;
    if (pickLib.length === 1){
        allLib.forEach((lib) => {
        lib.classList.add("show");
        });
        } else{
        allLib.forEach((lib) => {
            lib.classList.remove("show");
        });
        clickedLi.classList.add("show");
        filterlib.classList.remove("open");
        }
});
//도서관 제목 내용
filterTit.addEventListener("click", (e) => {
    const clickedLi = e.target.closest("li"); 
    const alllist = filterTit.querySelectorAll("li");
    const pickList = filterTit.querySelectorAll("li.show");
    filterTit.classList.add("open");
    if (!clickedLi) return;
    if (pickList.length === 1) {
        for (let i = 0; i < alllist.length; i++){
            alllist[i].classList.add("show");
        }
        }else {
        for (let i = 0; i < alllist.length; i++){
            alllist[i].classList.remove("show");
        }
        clickedLi.classList.add("show");
        filterTit.classList.remove("open");
        }
});
//검색 버튼 전송 방지 알람
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault(); //새로고침방지
    if(searchTxt.value === ""){
        alert("검색어를 입력해주세요")
    }
})