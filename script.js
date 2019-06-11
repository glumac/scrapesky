const imgNav = document.querySelector(".img-nav");
const mainImg = document.querySelector(".main-img");

imgNav.onclick = selectImage;

imgNav.addEventListener("keyup", function ($event) {
  $event.preventDefault();

  if ($event.keyCode === 13) selectImage($event);
});

function selectImage($event) {
  $event.preventDefault();

  const imgSrc = $event.target.getAttribute("data-img");

  if (imgSrc) {
    mainImg.setAttribute(
      "src",
      `https://github.com/glumac/skyscrapers/blob/master/skyscraper${imgSrc}.jpeg?raw=true`
    );
  }
}
