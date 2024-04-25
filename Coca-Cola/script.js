var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    conterSlides: true,
    slidePerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 77,
        depth: 700,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });

  function toggleMenu() {
    const menuToggle = document.querySelector('.toggle'); 
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }