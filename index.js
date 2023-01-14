if (document.querySelector(".header")){
    let gamburger = document.querySelector(".header__gamburger")
    let popup = document.querySelector(".header__popup")
    gamburger.addEventListener("click", function(){
        gamburger.classList.toggle("header__gamburger-active")
        popup.classList.toggle("header__popup-active")
    })
}
if (document.querySelector(".swiper")){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

