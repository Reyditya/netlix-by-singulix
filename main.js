const imageWidth = 330;
let scrollPosition = 0;

function scrollLeft() {
  if (scrollPosition > 0) {
    scrollPosition -= imageWidth; // Perubahan operator disini
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(-${scrollPosition}px)`;
  }
}

function scrollRight() {
  const carousel = document.querySelector(".carousel");
  const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

  if (scrollPosition < maxScrollPosition) {
    scrollPosition += imageWidth; // Perubahan operator disini
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(-${scrollPosition}px)`;
  }
}

document.getElementById("back").addEventListener("click", scrollLeft);
document.getElementById("next").addEventListener("click", scrollRight);
