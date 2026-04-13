const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("active");
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent!");
});