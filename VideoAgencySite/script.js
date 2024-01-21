let show = 'show';
let unshow = 'unshow';
const buttonsMenu = document.getElementById("buttons-menu");
const buttonsMenuOverlay = document.getElementById("buttons-menu-overlay");
const buttonsMenuButton = document.getElementById("right-button-in");

function menuButton() {
    if (~buttonsMenu.className.indexOf(unshow)) {
        buttonsMenu.className = buttonsMenu.className.replace(unshow, show);
        buttonsMenuOverlay.className = "show";
        buttonsMenuButton.className = "fa-solid fa-xmark fa-2xl";
        buttonsMenuButton.style.color = "#fff";
    } else {
        buttonsMenu.className = buttonsMenu.className.replace(show, unshow);
        buttonsMenuOverlay.className = "unshow";
        buttonsMenuButton.className = "fa-solid fa-bars fa-2xl";
        buttonsMenuButton.style.color = "black";
    }
}