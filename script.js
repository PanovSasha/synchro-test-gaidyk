// mobile navigation menu
document.querySelector("#button").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("header__breadcrumbs--open");
    document.getElementById("button").classList.toggle("header__toggle--open");
})

// mobile profile menu
document.querySelector("#profile-btn").addEventListener("click", function() {
    document.getElementById("profile-menu").classList.toggle("header__profile-menu--open");
})

// dropdown
let  dropdownBtns = document.querySelectorAll(".dropdown__btn");

function dropdown(target) {
    target.classList.toggle("dropdown__btn--open");
    target.nextElementSibling.classList.toggle("dropdown__content--open");
}

for(let $i = 0; $i < dropdownBtns.length; $i++) {
    let dropdownBtn = dropdownBtns[$i];
    dropdownBtn.addEventListener('click', () => {
        dropdown(dropdownBtn);
    });
}

// hero carousel
const slides = document.querySelectorAll(".carousel__slide");
const dots = document.querySelectorAll(".carousel__dot");
let currentSlide = 0;

function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("carousel__dot--active", i === index);
    });
    currentSlide = index;
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        goToSlide(i);
    });
});

// form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (name !== "" && email !== "" && checkbox) {
        document.getElementById("submit-btn").disabled = false;
    } else {
        document.getElementById("submit-btn").disabled = true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");

    if (email === "" || email.indexOf("@") === -1) {
        emailError.innerHTML = "Некорректный email";
        document.getElementById("submit-btn").disabled = true;
    } else {
        emailError.innerHTML = "";
    }
}

// player-carousel
const state = {};
const carouselList = document.querySelector('.players-carousel__list');
const carouselItems = document.querySelectorAll('.players-carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.players-carousel__item');

  if (!isItem || newActive.classList.contains('players-carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('players-carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

// popup
document.getElementById("submit-btn").addEventListener("click", function() {
    document.getElementById("popup").classList.add("popup--active");
});