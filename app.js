var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".course-col", { interval: 700 });
ScrollReveal().reveal(".campus-col", { interval: 200 });
ScrollReveal().reveal(".campus-col", { interval: 200 });
ScrollReveal().reveal(".facilities-col", { interval: 200 });
ScrollReveal().reveal(".testimonial-col", { interval: 200 });
ScrollReveal().reveal(".hero-btn", { delay: 900, origin: "bottom" });
ScrollReveal().reveal(".course", { delay: 500, origin: "left" });
ScrollReveal().reveal(".animation", { delay: 500, origin: "left" });
ScrollReveal().reveal(".textanimation", { delay: 700, origin: "top" });
ScrollReveal().reveal(".about", { delay: 700, origin: "right" });
ScrollReveal().reveal(".cta", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".footer", { delay: 900, origin: "top" });
ScrollReveal().reveal(".icons", { delay: 1200, origin: "bottom" });
