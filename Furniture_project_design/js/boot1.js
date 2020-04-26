let sliderImages1 = document.querySelectorAll(".slide1"),
    arrowLeft1 = document.querySelector("#arrow-left1"),
    arrowRight1 = document.querySelector("#arrow-right1"),
    current = 0;

//slider 0
// Clear all images
function reset1() {
  for (let i = 0; i < sliderImages1.length; i++) {
    sliderImages1[i].style.display = "none";
  }
}

// Init slider0
function startSlide1() {
  reset1();
  sliderImages1[0].style.display = "block";
}

// Show prev
function slideLeft1() {
  reset1();
  sliderImages1[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight1() {
  reset1();
  sliderImages1[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft1.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages1.length;
  }
  slideLeft1();
});

// Right arrow click
arrowRight1.addEventListener("click", function() {
  if (current === sliderImages1.length - 1) {
    current = -1;
  }
  slideRight1();
});
startSlide1();
