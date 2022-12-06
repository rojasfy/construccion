let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_quantity");
  const speed = 1000;

  const animateCounters = () => {
    for (const counter of counters) {
      const updateCounter = () => {
        let quantityMax = parseInt(counter.dataset.quantityTotal),
          value_actual = parseInt(counter.innerText),
          increase = quantityMax / speed;

        if (value_actual < quantityMax) {
          counter.innerText = Math.ceil(value_actual + increase);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = quantityMax;
        }
      };
      updateCounter();
    }
  };

  const showCounter = (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("animate");
        item.target.classList.remove("covert");
        setTimeout(animateCounters, 300);
      }
    });
  };

  const observer = new IntersectionObserver(showCounter, {
    threshold: 1,
  });

  const elementsHTML = document.querySelectorAll(".counter");
  elementsHTML.forEach((elementHTML) => observer.observe(elementHTML));
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});
