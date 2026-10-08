const enterButton = document.getElementById("enterButton");
const loader = document.getElementById("loader");
const website = document.getElementById("website");


enterButton.addEventListener("click", () => {

    loader.classList.add("hidden");

    setTimeout(() => {

        website.classList.add("visible");

    }, 300);

});