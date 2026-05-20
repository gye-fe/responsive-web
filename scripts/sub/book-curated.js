// 전역변수
// const filterlib =  document.querySelector(".filter-library");
// const filterTit =  document.querySelector(".filter-tit");
// const filterBtn = document.querySelector(".search-btn"); //검색버튼
// const searchTxt = document.querySelector(".search-txt"); //검색 인풋
const libaryListTit = document.querySelector("fieldset .library-ch")
const choiceTit = document.querySelector("fieldset .subject-ch")
const libaryList = libaryListTit.querySelectorAll("li")


// 도서관 필터
// libaryListTit.addEventListener("click", (e) => {
//     const clickedLi = e.target.closest("li"); 
//     const allLib = libaryListTit.querySelectorAll("li");
//     const pickLib = libaryListTit.querySelectorAll("li.active");
//     libaryListTit.classList.add("show");

//     if (!clickedLi) return;
//     if (pickLib.length === 1){
//         allLib.forEach((lib) => {
//         lib.classList.add("active");
//         });
//         } else{
//         allLib.forEach((lib) => {
//             lib.classList.remove("active");
//         });
//         clickedLi.classList.add("active");
//         libaryListTit.classList.remove("show");
//     }
// });

// //도서관 제목 내용
// choiceTit.addEventListener("click", (e) => {
//     const clickedLi = e.target.closest("li"); 
//     const alllist = choiceTit.querySelectorAll("li");
//     const pickList = choiceTit.querySelectorAll("li.active");
//     choiceTit.classList.add("show");
//     if (!clickedLi) return;
//     if (pickList.length === 1) {
//         for (let i = 0; i < alllist.length; i++){
//             alllist[i].classList.add("active");
//         }
//     }else {
//         for (let i = 0; i < alllist.length; i++){
//             alllist[i].classList.remove("active");
//         }
//         clickedLi.classList.add("active");
//         choiceTit.classList.remove("show");
//     }
// });

libaryListTit.addEventListener("click", (e)=>{
    dropdown(e);
});
choiceTit.addEventListener("click", (e)=>{
    dropdown(e);
});



function dropdown(e){
    const clickLi = e.target.closest("li");
    if(!clickLi) return;

    const ul = clickLi.parentElement;

    clickLi.classList.add("active");
    [...ul.children]
        .filter(function(child){
            return child != clickLi;
        })
        .forEach(function(child){
            child.classList.remove("active");
        })

    ul.classList.toggle("show");
}

//검색 버튼 전송 방지 알람
filterBtn.addEventListener("click",(e)=>{
    e.preventDefault(); //새로고침방지
    if(searchTxt.value === ""){
        alert("검색어를 입력해주세요")
    }
})