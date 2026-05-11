//데이터 구간
console.log("JS 작동중");
const data = [
  {
    age: "유아",
    categories: [
      "성장","가족","몸","학교","사람","동물","벌레","식물","날씨",
      "옛이야기","미래","과거","지도","흥미로운","무서운","슬픈",
      "사랑","우정","과학","스포츠","그림/노래","음식","미스터리","판타지"
    ],
    types: ["그림책","유아학습","놀이학습"]
  },
  {
    age: "초등학생",
    categories: [
      "성장","가족","몸","학교","사람","동물","벌레","식물","날씨",
      "옛이야기","미래","과거","지도","흥미로운","무서운","슬픈",
      "사랑","우정","과학","스포츠","그림/노래","음식","미스터리","판타지"
    ],
    types: ["어린이문학","어린이학습/교양","어린이만화"]
  },
  {
    age: "중학생",
    categories: ["인권","정보","공부","진로","감정","여가","일탈","가정","친구","이성"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","청소년"
    ]
  },
  {
    age: "고등학생",
    categories: ["인권","정보","공부","진로","감정","여가","일탈","가정","친구","이성"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","청소년"
    ]
  },
  {
    age: "20대",
    categories: ["사랑","인생설계","인생철학","자기계발","일","결혼","행복","습관","마음","여행","취미"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"
    ]
  },
  {
    age: "30대",
    categories: [
      "예비부모","영아자녀고육","유아자녀교육","초등자녀교육","중고등자녀교육",
      "사랑","인생설계","인생철학","자기계발","일","결혼","행복","습관","마음","여행","취미"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","부모"
    ]
  },
  {
    age: "40대",
    categories: [
      "유아자녀교육","초등자녀교육","중고등자녀교육",
      "행복","습관","마음","여행","취미"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","부모"
    ]
  },
  {
    age: "50대",
    categories: [
      "인생관","웰에이징","웰다잉","라이프스타일","은퇴","직업탐구",
      "자산관리","귀농귀촌","가족관계","사회관계","질병","운동","노화","식생활"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"
    ]
  },
  {
    age: "60대 이상",
    categories: [
      "인생관","웰에이징","웰다잉","라이프스타일","은퇴","직업탐구",
      "자산관리","귀농귀촌","가족관계","사회관계","질병","운동","노화","식생활"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"
    ]
  }
];
//전역변수구간
const contentsArea = document.querySelector(".user-select-area");//본문
const processBtns = document.querySelector(".select-process-btns");//행동버튼
const nextBtn = processBtns.querySelector(".next-btn");
const BtnArea = contentsArea.querySelector(".user-test .btns-area");
const prevBtn =  processBtns.querySelector(".prev-btn");
/**/
//로직 구간 ,함수작성부분
renderUserAge()

/*나이 출력 함수*/ 
function renderUserAge(){
  let html ="";
  for (let i = 0; i < data.length; i++){
      html += `<button data-age="${data[i].age}">${data[i].age}</button>`;
  }
  contentsArea.querySelector(".user-test .btns-area").innerHTML = html;
  contentsArea.querySelector("h3").textContent = "당신의 연령대를 선택해주세요"
  ""
}
/*관심사 출력 함수*/ 
function renderBtnArea(userageSel){
    let html ="";
    for (let i = 0; i < userageSel.categories.length; i++){
    html += `<button data-age="${data[i].age}">${userageSel.categories[i]}</button>`}
  contentsArea.querySelector(".user-test .btns-area").innerHTML = html;
  contentsArea.querySelector("h3").textContent = "당신의 관심사를 선택해주세요(중복선택가능)"
}
/*관심분야 출력 함수*/ 
function renderUserLike(userSel){
    let html ="";
    for (let i = 0; i < userSel.types.length; i++){
    html += `<button>${userSel.types[i]}</button>`}
  contentsArea.querySelector(".user-test .btns-area").innerHTML = html;
  contentsArea.querySelector("h3").textContent = "당신의 관심분야를 선택해주세요(중복선택가능)"

}


/*버튼 클릭 발생*/
let stepNum = 1;
let userselected = "";
let userageSel = null;
let userSelCategory = null;
BtnArea.addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    userselected = e.target.dataset.age; //전역에 쓸 저장용도
    if(stepNum < 1){
      BtnArea.querySelectorAll("button").forEach(function(b){
      b.classList.remove("on");
    });
    e.target.classList.add("on");
    }else{
      e.target.classList.toggle("on");
    }
    
    nextBtn.classList.add("on");
    

    for (let i = 0; i < data.length; i++) {
      if(userselected === data[i].age){
        userageSel = data[i];
      }
    }
    for(let i = 0; i < data.length; i++){
      if(userSelCategory === data[i].categories){
        userSelCategory = data[i];
      }
    }
  }

});


nextBtn.addEventListener("click",()=>{
  stepNum++
  if(stepNum === 1){
    renderBtnArea(userageSel)
  }
  else if(stepNum === 2){
    renderUserLike(userSel)
  }
  if(stepNum < 1){
    prevBtn.style.display = "none";
  }else{
    prevBtn.style.display = "block";
  }
console.log(stepNum)
});
prevBtn.addEventListener("click",()=>{
  stepNum--
  if(stepNum === 1){
    renderBtnArea(userSel)
  }
  else if(stepNum === 2){
    renderUserLike(userSel)
  }
})
