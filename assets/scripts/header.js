const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})
document.querySelectorAll(".list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))