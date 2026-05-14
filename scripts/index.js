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

