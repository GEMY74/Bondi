//// filter images 

let swither = document.querySelectorAll(".switcher li");
let images = document.querySelectorAll('.col-lg-3')
let imgs = Array.from(images);


swither.forEach((li) => {
  li.addEventListener("click", active);
  li.addEventListener("click", imgSwitch);
});

function active() {
  swither.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function imgSwitch() {
  imgs.forEach((img) => {
    img.style.display = "none";

  });
  document.querySelectorAll(this.dataset.category).forEach((el) => {
    el.style.display = "block";

  });
}

////////////////////////////////////////