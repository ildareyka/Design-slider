let images = [
  {url: 'assets/slide1.svg',
    title: "Rostov-on-Don, Admiral"
  },
  {url: 'assets/slide5.svg',
    title: "Sochi Thieves"
  },
  {url: 'assets/slide4.svg',
    title: "Rostov-on-Don Patriotic"
  },
];

function initSlider(options) {
if (!images || !images.length) return;



let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".slider__arrows");
let sliderDots = document.querySelector(".slider__dots");
let sliderTitles = document.querySelector(".slider__titles");

initImages();
initArrows();
initDots();
initTitles();



function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber ===0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    })
  })
}

function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
  sliderTitles.querySelector(".active").classList.remove("active");
  sliderTitles.querySelector(".n" + num).classList.add("active");
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function initTitles() {
  images.forEach((image, index) => {
    let titleDiv = `<div class="slider__titles n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.title}</div>`;
    sliderTitles.innerHTML += titleDiv;
  });
  sliderTitles.querySelectorAll(".slider__titles").forEach(titleDiv => {
    titleDiv.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}





function cropTitle(title, size) {
  if (title.length <= size) {
    return title;
  } else {
    return title.substr(0, size) + "...";
  }
}
}

initSlider();


