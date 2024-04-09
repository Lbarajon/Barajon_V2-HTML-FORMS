const btn = document.querySelector(".dropdownbtn");
const btnOptions = document.querySelector(".options-dropdown");

let isClick = false;

btn.addEventListener("click", () => {
    isClick = !isClick;
    btnOptions.style.display = isClick ? "flex" : "none";
});


const submenus = document.querySelectorAll(".options-dropdown > li");

submenus.forEach(submenu => {
    submenu.addEventListener("click", (event) => {
        event.stopPropagation();
        const subMenuList = submenu.querySelector('.submenu');
        subMenuList.style.display = subMenuList.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("click", () => {
    submenus.forEach(submenu => {
        const subMenuList = submenu.querySelector(".submenu");
        subMenuList.style.display = "none";
    });
});



