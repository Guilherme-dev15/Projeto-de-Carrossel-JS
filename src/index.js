document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll('.carousel-item-container');
  const prevBtn = document.querySelectorAll('.prevBtn');
  const nextBtn = document.querySelectorAll('.nextBtn');

  let currentIndex = 0;
  function showSlide(index) {
    // Esconder todos os slides
    carouselItems.forEach(item => item.classList.add('hidden'));
    // Mostrar o slide atual
    carouselItems[index].classList.remove('hidden');

    //Desabilitar Navegação caso for o primeiro item (Prev <) ou ultimo item (Next >)
    totalItems = carouselItems.length
    if (currentIndex == 0) {
      prevBtn.forEach(btn => btn.classList.add("carousel-button-disabled"));
    } else if (currentIndex == totalItems - 1) {
      nextBtn.forEach(btn => btn.classList.add("carousel-button-disabled"));
    } else {
      prevBtn.forEach(btn => btn.classList.remove("carousel-button-disabled"));
      nextBtn.forEach(btn => btn.classList.remove("carousel-button-disabled"));
    }
  }

  prevBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    });
  });

  nextBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    });
  });

  // Mostrar o primeiro slide inicialmente
  showSlide(currentIndex);



  // Habilitar navegação mobile
  const navDesktop = document.querySelectorAll('.carousel-navigation');
  const navMobile = document.querySelectorAll('.carousel-navigation-mobile')

  const mobileScreen = "(max-width: 1180px)";
  const mediamobileScreen = window.matchMedia(`${mobileScreen}`);

  function handleScreenSizeChange(e) {
    if (e.matches) {
      navDesktop.forEach(element => element.classList.add('hidde-mobile'));
      navMobile.forEach(element => element.classList.remove('hidde-mobile'))
    } else {
      navDesktop.forEach(element => element.classList.remove('hidde-mobile'));
      navMobile.forEach(element => element.classList.add('hidde-mobile'));
    }
  }

  mediamobileScreen.addEventListener('change', handleScreenSizeChange);
  handleScreenSizeChange(mediamobileScreen);
  
});