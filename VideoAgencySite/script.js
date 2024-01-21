let show = 'show';
let unshow = 'unshow';
const buttonsMenu = document.getElementById("buttons-menu");
const buttonsMenuOverlay = document.getElementById("buttons-menu-overlay");
const buttonsMenuButton = document.getElementById("right-button");

function menuButton() {
    if (~buttonsMenu.className.indexOf(unshow)) {
        buttonsMenu.className = buttonsMenu.className.replace(unshow, show);
        buttonsMenuOverlay.className = "show";
    } else {
        buttonsMenu.className = buttonsMenu.className.replace(show, unshow);
        buttonsMenuOverlay.className = "unshow";
    }
}