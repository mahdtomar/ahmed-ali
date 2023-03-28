const root = document.querySelector(":root");
const caption = document.querySelector(".before-after");
const number = document.querySelector(".counter");
const prices = document.querySelectorAll(".price");
console.log(prices);
function increment(count, target, targervalue) {
  setInterval(() => {
    if (count < targervalue) {
      count++;
      target.innerText = count;
    }
  }, 5);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let count = 0;
    let target = entry.target;
    let targetNumber = parseInt(entry.target.getAttribute("data-value"));
    console.log(parseInt(targetNumber));
    entry.target.textContent = 0;
    increment(count, target, targetNumber);
  });
  console.log(entries);
});
observer.observe(number);
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
$(".menu").click(function () {
  $(".nav_ul").addClass("visible");
});
$(".close-icon").click(function () {
  $(".nav_ul").removeClass("visible");
});

$(".nav_ul li a").click(function (e) {
  $(".nav_ul li a").removeClass("active");
  e.target.classList.add("active");
});
