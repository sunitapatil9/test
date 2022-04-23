const navSlide = () => {
  const mobileCTA = document.querySelector(".cta-menu");
  const nav = document.querySelector(".navigation");

  // Toggle Nav
  mobileCTA.addEventListener("click", () => {
    nav.classList.toggle("responsive");
  });
};

const app = () => {
  navSlide();
};

app();



var modal = document.getElementById("submit-form");

var btn = document.getElementById("configuration-button-submit");


btn.onclick = function() {
  modal.style.display = "block";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}