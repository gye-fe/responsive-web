//전역변수
const formArea = document.querySelector(".form-area");
const searchSixth =  formArea.querySelector(".search-key06");
const dropSortby = searchSixth.querySelector(".sort-by");
const dropFilter = searchSixth.querySelector(".filter-by");

//함수

//ul로 li여닫기
// dropFilter.addEventListener("click", (e) => {
//     const clickedLi = e.target;
//     if(e){
//         dropFilter.querySelectorAll("li").forEach((li)=>{
//             li.style.display = "block";
//         })
//     }
//     if (clickedLi.tagName === "LI") {
//         const currentSelected = dropFilter.querySelector(".selected");
//         if (currentSelected) {
//             currentSelected.classList.remove("selected");
//             dropFilter.querySelectorAll("li").style.display = "none"
//         };
//         clickedLi.classList.add("selected");

//         dropSortby.style.display = "block";
        
//         console.log(e, "클릭됨");
//     }
// });