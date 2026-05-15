const secArchbanner = document.querySelector(".archive-banner");
const selBox = secArchbanner.querySelector(".sel-box");


//도서관아카이브 카드뉴스-ul
selBox.addEventListener("click", (e) => {
    const sellist = e.target.closest("li"); 
    const alllist = selBox.querySelectorAll("li");
    const pickList = selBox.querySelectorAll("li.on");
    if (!sellist) return;
    selBox.classList.add("open");
    if (pickList.length === 1){
        alllist.forEach((list) => {
            list.classList.add("on");
        });
    }else{
        alllist.forEach((list) => {
            list.classList.remove("on");
        });
        selBox.classList.remove("open");
        sellist.classList.add("on");
    }
})
//스와이퍼 cdn
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', //cdn 슬라이더 너비 고정 초기화
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//문화 행사 배너
var swiper = new Swiper(".cult-banner", {
    slidesPerView: 'auto',
    centeredSlides: false, //강제 가운데 정렬 막기
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
