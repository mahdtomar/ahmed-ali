const root = document.querySelector(":root");
const caption = document.querySelector(".before-after");
let rootStyles = getComputedStyle(root);
document.querySelector("#slider").addEventListener("input", (e) => {
  root.style.setProperty("--position", `${e.target.value}%`);
});
document.querySelector("#slider").addEventListener("mouseenter", (e) => {
  caption.classList.add("hidden");
});
document.querySelector("#slider").addEventListener("mouseleave", (e) => {
  caption.classList.remove("hidden");
});
