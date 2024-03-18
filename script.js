document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      toggles.forEach(function (tog) {
        tog.style.fontWeight = "normal";
        tog.style.fontSize = "initial";
      });

      const detail = this.nextElementSibling;
      const isOpen = detail.style.display === "block";

      document.querySelectorAll(".details").forEach(function (d) {
        d.style.display = "none";
      });

      if (!isOpen) {
        detail.style.display = "block";
        this.style.fontWeight = "bold";
        this.style.fontSize = "25px";
      } else {
        this.style.fontWeight = "normal";
        this.style.fontSize = "initial";
      }
    });
  });
});
window.onload = function () {
  const animatedImage = document.getElementById("animatedImage");
  const imageCaption = document.getElementById("imageCaption");
  const highlightElement = document.querySelector(".highlight");

  animatedImage.style.width = "150px";
  animatedImage.addEventListener("animationend", () => {
    animatedImage.style.width = "700px";

    requestAnimationFrame(() => {
      imageCaption.style.opacity = 1;
      animatedImage.style.boxShadow = "5px 5px 20px 5px rgba(0, 0, 0, 0.2)";

      setTimeout(() => {
        highlightElement.classList.add("highlight-animation");
      }, 1500);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const movingUp = currentScrollY < lastScrollY;
    const images = document.querySelectorAll(".app-image");
    const offset = 20;

    images.forEach((img, index) => {
      img.style.transition = "transform 1.5s ease-out"; // Add transition effect
      if (movingUp) {
        img.style.transform = `translateY(${
          index % 2 === 0 ? -offset : offset
        }px)`;
      } else {
        img.style.transform = `translateY(${offset}px)`;
      }
    });

    lastScrollY = currentScrollY;
  });
});

document.addEventListener("scroll", function () {
  const features = document.querySelectorAll(".features");
  features.forEach(function (feature) {
    const { top } = feature.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (top < viewportHeight) {
      feature.style.opacity = 1;
      feature.style.transform = "translateY(0)";
      feature.style.transition = "opacity 2s ease-out, transform 2s ease-out";
    }

    if (top <= 0) {
      feature.style.opacity = 0;
      feature.style.transform = "translateY(20px)";
      feature.style.transition = "none";
    }
  });
});

function showSubtitle(id) {
  // Hide all subtitles
  document.querySelectorAll(".subtitle").forEach(function (div) {
    div.style.display = "none";
  });

  // Show the selected subtitle
  document.getElementById(id).style.display = "block";
}

function toggleSubtitle(answerId) {
  var answer = document.getElementById(answerId);
  var arrowIcon = document.getElementById(answerId + "Arrow");

  if (answer.classList.contains("visible")) {
    answer.classList.remove("visible");
    setTimeout(function () {
      answer.style.display = "none";
    }, 500);
    arrowIcon.src = "./static/img/arrow-down.png";
  } else {
    answer.classList.add("visible");
    answer.style.display = "block";
    answer.style.maxHeight = "none";
    arrowIcon.src = "./static/img/arrow-up.png";
  }
}
