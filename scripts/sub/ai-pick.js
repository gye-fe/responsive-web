//데이터 구간
console.log("JS 작동중");
const data = [
  {
    age: "유아",
    categories: [
    { name: "성장", image: "./images/ai-pick/cate_growth.png" },
    { name: "가족", image: "./images/ai-pick/cate_family.png" },
    { name: "몸", image: "./images/ai-pick/cate_body.png" },
    { name: "학교", image: "./images/ai-pick/cate_school.png" },
    { name: "사람", image: "./images/ai-pick/cate_people.png" },
    { name: "동물", image: "./images/ai-pick/cate_animal.png" },
    { name: "벌레", image: "./images/ai-pick/cate_bug.png" },
    { name: "식물", image: "./images/ai-pick/cate_plant.png" },
    { name: "날씨", image: "./images/ai-pick/cate_weather.png" },
    { name: "옛이야기", image: "./images/ai-pick/cate_story.png" },
    { name: "미래", image: "./images/ai-pick/cate_future.png" },
    { name: "과거", image: "./images/ai-pick/cate_past.png" },
    { name: "지도", image: "./images/ai-pick/cate_map.png" },
    { name: "흥미로운", image: "./images/ai-pick/cate_fun.png" },
    { name: "무서운", image: "./images/ai-pick/cate_scary.png" },
    { name: "슬픈", image: "./images/ai-pick/cate_sad.png" },
    { name: "사랑", image: "./images/ai-pick/cate_love.png" },
    { name: "우정", image: "./images/ai-pick/cate_friend.png" },
    { name: "과학", image: "./images/ai-pick/cate_science.png" },
    { name: "스포츠", image: "./images/ai-pick/cate_sports.png" },
    { name: "그림/노래", image: "./images/ai-pick/cate_art.png" },
    { name: "음식", image: "./images/ai-pick/cate_food.png" },
    { name: "미스터리", image: "./images/ai-pick/cate_mystery.png" },
    { name: "판타지", image: "./images/ai-pick/cate_fantasy.png" }
  ],

  types: [
    { name: "그림책", image: "./images/ai-pick/type_picturebook.png" },
    { name: "유아학습", image: "./images/ai-pick/type_kidsstudy.png" },
    { name: "놀이학습", image: "./images/ai-pick/type_playlearn.png" }
  ],
    image : "./images/ai-pick/ico_age_1.png"
  },
  {
    age: "초등학생",
    categories: [
      { name: "성장", image: "./images/ai-pick/cate_growth.png" },
      { name: "가족", image: "./images/ai-pick/cate_family.png" },
      { name: "몸", image: "./images/ai-pick/cate_body.png" },
      { name: "학교", image: "./images/ai-pick/cate_school.png" },
      { name: "사람", image: "./images/ai-pick/cate_people.png" },
      { name: "동물", image: "./images/ai-pick/cate_animal.png" },
      { name: "벌레", image: "./images/ai-pick/cate_bug.png" },
      { name: "식물", image: "./images/ai-pick/cate_plant.png" },
      { name: "날씨", image: "./images/ai-pick/cate_weather.png" },
      { name: "옛이야기", image: "./images/ai-pick/cate_story.png" },
      { name: "미래", image: "./images/ai-pick/cate_future.png" },
      { name: "과거", image: "./images/ai-pick/cate_past.png" },
      { name: "지도", image: "./images/ai-pick/cate_map.png" },
      { name: "흥미로운", image: "./images/ai-pick/cate_fun.png" },
      { name: "무서운", image: "./images/ai-pick/cate_scary.png" },
      { name: "슬픈", image: "./images/ai-pick/cate_sad.png" },
      { name: "사랑", image: "./images/ai-pick/cate_love.png" },
      { name: "우정", image: "./images/ai-pick/cate_friend.png" },
      { name: "과학", image: "./images/ai-pick/cate_science.png" },
      { name: "스포츠", image: "./images/ai-pick/cate_sports.png" },
      { name: "그림/노래", image: "./images/ai-pick/cate_art.png" },
      { name: "음식", image: "./images/ai-pick/cate_food.png" },
      { name: "미스터리", image: "./images/ai-pick/cate_mystery.png" },
      { name: "판타지", image: "./images/ai-pick/cate_fantasy.png" }
    ],

    types: [
      { name: "어린이문학", image: "./images/ai-pick/type_childrenlit.png" },
      { name: "어린이학습/교양", image: "./images/ai-pick/type_childstudy.png" },
      { name: "어린이만화", image: "./images/ai-pick/type_childcomic.png" }
    ],
    image : "./images/ai-pick/ico_age_2.png"
  },
  {
    age: "중학생",
    categories: [
        { name: "인권", image: "./images/ai-pick/cate_rights.png" },
        { name: "정보", image: "./images/ai-pick/cate_info.png" },
        { name: "공부", image: "./images/ai-pick/cate_study.png" },
        { name: "진로", image: "./images/ai-pick/cate_career.png" },
        { name: "감정", image: "./images/ai-pick/cate_emotion.png" },
        { name: "여가", image: "./images/ai-pick/cate_hobby.png" },
        { name: "일탈", image: "./images/ai-pick/cate_escape.png" },
        { name: "가정", image: "./images/ai-pick/cate_family.png" },
        { name: "친구", image: "./images/ai-pick/cate_friend.png" },
        { name: "이성", image: "./images/ai-pick/cate_love.png" }
      ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" },
      { name: "청소년", image: "./images/ai-pick/type_teen.png" }
    ],
    image : "./images/ai-pick/ico_age_3.png"
  },
  {
    age: "고등학생",
    categories: [
        { name: "인권", image: "./images/ai-pick/cate_rights.png" },
        { name: "정보", image: "./images/ai-pick/cate_info.png" },
        { name: "공부", image: "./images/ai-pick/cate_study.png" },
        { name: "진로", image: "./images/ai-pick/cate_career.png" },
        { name: "감정", image: "./images/ai-pick/cate_emotion.png" },
        { name: "여가", image: "./images/ai-pick/cate_hobby.png" },
        { name: "일탈", image: "./images/ai-pick/cate_escape.png" },
        { name: "가정", image: "./images/ai-pick/cate_family.png" },
        { name: "친구", image: "./images/ai-pick/cate_friend.png" },
        { name: "이성", image: "./images/ai-pick/cate_love.png" }
      ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" },
      { name: "청소년", image: "./images/ai-pick/type_teen.png" }
    ],
      image : "./images/ai-pick/ico_age_4.png"
  },
  {
    age: "20대",
    categories: [
      { name: "사랑", image: "./images/ai-pick/cate_love.png" },
      { name: "인생설계", image: "./images/ai-pick/cate_lifeplan.png" },
      { name: "인생철학", image: "./images/ai-pick/cate_philosophy.png" },
      { name: "자기계발", image: "./images/ai-pick/cate_selfhelp.png" },
      { name: "일", image: "./images/ai-pick/cate_work.png" },
      { name: "결혼", image: "./images/ai-pick/cate_marriage.png" },
      { name: "행복", image: "./images/ai-pick/cate_happy.png" },
      { name: "습관", image: "./images/ai-pick/cate_habit.png" },
      { name: "마음", image: "./images/ai-pick/cate_mind.png" },
      { name: "여행", image: "./images/ai-pick/cate_travel.png" },
      { name: "취미", image: "./images/ai-pick/cate_hobby.png" }
    ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" }
    ],
    image : "./images/ai-pick/ico_age_5.png"
  },
  {
    age: "30대",
    categories: [
      { name: "예비부모", image: "./images/ai-pick/cate_preparent.png" },
      { name: "영아자녀교육", image: "./images/ai-pick/cate_babycare.png" },
      { name: "유아자녀교육", image: "./images/ai-pick/cate_kidcare.png" },
      { name: "초등자녀교육", image: "./images/ai-pick/cate_elementary.png" },
      { name: "중고등자녀교육", image: "./images/ai-pick/cate_teenedu.png" },
      { name: "사랑", image: "./images/ai-pick/cate_love.png" },
      { name: "인생설계", image: "./images/ai-pick/cate_lifeplan.png" },
      { name: "인생철학", image: "./images/ai-pick/cate_philosophy.png" },
      { name: "자기계발", image: "./images/ai-pick/cate_selfhelp.png" },
      { name: "일", image: "./images/ai-pick/cate_work.png" },
      { name: "결혼", image: "./images/ai-pick/cate_marriage.png" },
      { name: "행복", image: "./images/ai-pick/cate_happy.png" },
      { name: "습관", image: "./images/ai-pick/cate_habit.png" },
      { name: "마음", image: "./images/ai-pick/cate_mind.png" },
      { name: "여행", image: "./images/ai-pick/cate_travel.png" },
      { name: "취미", image: "./images/ai-pick/cate_hobby.png" }
    ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" },
      { name: "부모", image: "./images/ai-pick/type_parent.png" }
    ],
    image : "./images/ai-pick/ico_age_6.png"
  },
  {
    age: "40대",
    categories: [
      { name: "유아자녀교육", image: "./images/ai-pick/cate_kidcare.png" },
      { name: "초등자녀교육", image: "./images/ai-pick/cate_elementary.png" },
      { name: "중고등자녀교육", image: "./images/ai-pick/cate_teenedu.png" },
      { name: "사랑", image: "./images/ai-pick/cate_love.png" },
      { name: "인생설계", image: "./images/ai-pick/cate_lifeplan.png" },
      { name: "인생철학", image: "./images/ai-pick/cate_philosophy.png" },
      { name: "자기계발", image: "./images/ai-pick/cate_selfhelp.png" },
      { name: "일", image: "./images/ai-pick/cate_work.png" },
      { name: "결혼", image: "./images/ai-pick/cate_marriage.png" },
      { name: "행복", image: "./images/ai-pick/cate_happy.png" },
      { name: "습관", image: "./images/ai-pick/cate_habit.png" },
      { name: "마음", image: "./images/ai-pick/cate_mind.png" },
      { name: "여행", image: "./images/ai-pick/cate_travel.png" },
      { name: "취미", image: "./images/ai-pick/cate_hobby.png" }
    ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" },
      { name: "부모", image: "./images/ai-pick/type_parent.png" }
    ],
    image : "./images/ai-pick/ico_age_7.png"
  },
  {
    age: "50대",
    categories: [
      "인생관","웰에이징","웰다잉","라이프스타일","은퇴","직업탐구",
      "자산관리","귀농귀촌","가족관계","사회관계","질병","운동","노화","식생활"
    ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" }
    ],
    image : "./images/ai-pick/ico_age_8.png"  
  },
  {
    age: "60대 이상",
    categories: [
      { name: "인생관", image: "./images/ai-pick/cate_life.png" },
      { name: "웰에이징", image: "./images/ai-pick/cate_wellaging.png" },
      { name: "웰다잉", image: "./images/ai-pick/cate_welldying.png" },
      { name: "라이프스타일", image: "./images/ai-pick/cate_lifestyle.png" },
      { name: "은퇴", image: "./images/ai-pick/cate_retire.png" },
      { name: "직업탐구", image: "./images/ai-pick/cate_job.png" },
      { name: "자산관리", image: "./images/ai-pick/cate_asset.png" },
      { name: "귀농귀촌", image: "./images/ai-pick/cate_returnfarm.png" },
      { name: "가족관계", image: "./images/ai-pick/cate_family.png" },
      { name: "사회관계", image: "./images/ai-pick/cate_social.png" },
      { name: "질병", image: "./images/ai-pick/cate_disease.png" },
      { name: "운동", image: "./images/ai-pick/cate_exercise.png" },
      { name: "노화", image: "./images/ai-pick/cate_aging.png" },
      { name: "식생활", image: "./images/ai-pick/cate_diet.png" }
    ],
    types: [
      { name: "소설", image: "./images/ai-pick/type_novel.png" },
      { name: "에세이/시/희곡", image: "./images/ai-pick/type_essay.png" },
      { name: "인문", image: "./images/ai-pick/type_humanities.png" },
      { name: "자기계발", image: "./images/ai-pick/type_selfhelp.png" },
      { name: "경제/경영", image: "./images/ai-pick/type_business.png" },
      { name: "가정/취미/실용", image: "./images/ai-pick/type_hobby.png" },
      { name: "의학/건강", image: "./images/ai-pick/type_health.png" },
      { name: "여행/지리", image: "./images/ai-pick/type_travel.png" },
      { name: "과학/기술", image: "./images/ai-pick/type_science.png" },
      { name: "사회과학", image: "./images/ai-pick/type_social.png" },
      { name: "종교", image: "./images/ai-pick/type_religion.png" },
      { name: "역사/문화", image: "./images/ai-pick/type_history.png" },
      { name: "인물/평전", image: "./images/ai-pick/type_people.png" },
      { name: "예술/대중문화", image: "./images/ai-pick/type_art.png" },
      { name: "외국어", image: "./images/ai-pick/type_language.png" },
      { name: "컴퓨터", image: "./images/ai-pick/type_computer.png" },
      { name: "만화", image: "./images/ai-pick/type_comic.png" }
    ],
    image : "./images/ai-pick/ico_age_9.png"
  }
];
//전역변수구간
const contentsArea = document.querySelector(".user-select-wrapper");//본문
const processInfo = document.querySelectorAll("#main .process-info li span");
const processLi = document.querySelectorAll("#main .process-info li");
const stepTit = contentsArea.querySelector(".tit");
const stepInfo = contentsArea.querySelector(".dupli-info")
const stepArea = contentsArea.querySelector(".step-area")
const BtnArea = contentsArea.querySelector(".step-area .btns-area");
const userBooksArea = contentsArea.querySelector(".user-books"); //관심도서 3개구간
const resultArea = contentsArea.querySelector(".ai-pick-final");//결과 구간
const processBtns = document.querySelector(".select-process-btns");//행동버튼
const nextBtn = processBtns.querySelector(".next-btn");
const prevBtn =  processBtns.querySelector(".prev-btn");
const resetBtn = processBtns.querySelector(".reset");


//로직 구간 ,함수작성부분
renderUserAge()
nextBtn.disabled = true;
/*나이 출력 함수*/ 
function renderUserAge(){
  let html ="";
  for (let i = 0; i < data.length; i++){
      html += `<button data-age="${data[i].age}">
      <img src="${data[i].image}">
      ${data[i].age}
      </button>`;
  }
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 연령대를 선택해주세요";
  stepInfo.textContent = "";
}
/*관심사 출력 함수*/ 
function renderUserLike(userageSel){
  let html = "";
  userageSel.categories.forEach((item) => {
  html += `
    <button>
      <img src="${item.image}" alt="">
      <span>${item.name}</span>
    </button>
  `;
});
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 관심사를 선택해주세요";
  stepInfo.textContent = "(중복선택가능)";
}
/*관심분야 출력 함수*/ 
function renderUserField(userageSel){
  let html = "";
  userageSel.types.forEach((item) => {
  html += `
      <button>
        <img src="${item.image}" alt="">
        <span>${item.name}</span>
      </button>
    `;
  });
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 관심분야를 선택해주세요";
  stepInfo.textContent = "(중복선택가능)";
}

//버튼 컨트롤 함수
function btnControl(){
  if(stepNum === 1){
    prevBtn.style.display = "none";
    resultArea.classList.add("off");
    stepArea.classList.remove("off");
    nextBtn.style.display = "block";
    resetBtn.style.display ="none";
    nextBtn.textContent ="다음단계";
  }
  if(stepNum === 3){
    stepArea.classList.remove("off");
    userBooksArea.classList.add('off');
    nextBtn.textContent ="다음단계"
  }else if(stepNum === 4){
    userBooksArea.classList.remove('off');
    stepArea.classList.add("off");
    resultArea.classList.add("off");
    nextBtn.textContent ="결과보기";
    nextBtn.classList.add("on");/*다음 버튼 on*/
    nextBtn.disabled = false;
  }else if(stepNum === 5){
    resultArea.classList.remove("off");
    userBooksArea.classList.add("off");
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    resetBtn.style.display ="block";
  }
}
//스탭 움직이는 함수
function updatestepInfo(){
  processInfo.forEach(function(sp){
    sp.classList.remove("on");
  });
  processInfo[stepNum - 1].classList.add("on");
    processLi.forEach((li)=>{
      li.classList.remove("active")
    })
    processLi[stepNum - 1].classList.add("active");
}
//출력 함수를 제어하는 함수
function stepRender(){
  if(stepNum === 1){
    renderUserAge();
  }
  else if(stepNum === 2){
    renderUserLike(userageSel);
    prevBtn.style.display = "block";
  }else{
    renderUserField(userageSel);
  }
}
//다음버튼 비활성화 함수
function nextDisabled(){
    nextBtn.disabled = true;
    nextBtn.classList.remove("on");
}


/*단계별 버튼 클릭 이벤트 함수*/
let stepNum = 1;
let userselected = "";//전역에 쓸 버튼데이터 저장 용도
let userageSel = null; //출력 함수에 쓸 데이터 저장
BtnArea.addEventListener("click", function(e){
  if(e.target.tagName === "IMG" || e.target.tagName === "BUTTON"){
    const btn = e.target.closest('button')
  // if(e.target.tagName = "BUTTON")
    userselected = btn.dataset.age; //버튼안의 데이터아이디 저장
    for (let i = 0; i < data.length; i++) {
        if(userselected === data[i].age){
          userageSel = data[i];//출력함수에 쓸 데이터 저장
        }
      }
    //1단계만 라디오버튼속성 2단계는 체크박스 속성
    if(stepNum === 1){
      BtnArea.querySelectorAll("button").forEach(function(b){
        b.classList.remove("on");
      });
        btn.classList.add("on");
        nextBtn.disabled = false;
    }else{
      btn.classList.toggle("on");
    }
    
    //버튼 미 선택 시 다음버튼 비활성화시키기
    const btnOn = BtnArea.querySelectorAll("button.on");
      if(btnOn.length >= 1){
        nextBtn.classList.add("on");/*다음 버튼 on*/
        nextBtn.disabled = false;
      }else{
        nextDisabled()
      }
  }
});
//다음버튼
nextBtn.addEventListener("click",()=>{
  stepNum++
  stepRender();
  btnControl();
  updatestepInfo();
  nextBtn.classList.remove("on");
  console.log(stepNum + "단계")//확인용
});

//이전버튼
prevBtn.addEventListener("click",()=>{
  stepNum--
  stepRender();
  btnControl();
  updatestepInfo();
  nextBtn.classList.remove("on");
})
//리셋버튼
resetBtn.addEventListener("click",()=>{
  stepNum = 1;
  stepRender();
  btnControl();
  updatestepInfo();
  nextDisabled()
})