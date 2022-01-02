const list = document.querySelector(".list");
const grid1 = document.querySelector(".grid1");
const ltg = document.querySelector(".ltg");

list.addEventListener("click", () => {
    ltg.classList.add("list")
})


grid1.addEventListener("click", () => {
    ltg.classList.remove("list")
})
