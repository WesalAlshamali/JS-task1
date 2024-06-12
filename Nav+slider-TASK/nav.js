const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        const dropdown = btn.querySelector(".dropdown");
        dropdown.classList.toggle("show");
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-btn")) 
        {
        dropdowns.forEach((drop) => {
            drop.classList.remove("show");
        });
    }
});
