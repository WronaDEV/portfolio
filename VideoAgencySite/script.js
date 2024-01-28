let show = 'show';
let unshow = 'unshow';
const buttonsMenu = document.getElementById("buttons-menu");
const buttonsMenuOverlay = document.getElementById("buttons-menu-overlay");
const buttonsMenuButton = document.getElementById("right-button-in");
//
localStorage.setItem('activeDescription', '1');
descriptionsMenu('1');

function menuButton() {
    if (~buttonsMenu.className.indexOf(unshow)) {
        buttonsMenu.className = buttonsMenu.className.replace(unshow, show);
        buttonsMenuOverlay.className = "show";
        buttonsMenuButton.className = "fa-solid fa-xmark fa-2xl";
        buttonsMenuButton.style.color = "white";
    } else {
        buttonsMenu.className = buttonsMenu.className.replace(show, unshow);
        buttonsMenuOverlay.className = "unshow";
        buttonsMenuButton.className = "fa-solid fa-bars fa-2xl";
        buttonsMenuButton.style.color = "black";
    }
}

function descriptionsMenu(arg) {
    const activeDescription = localStorage.getItem('activeDescription');
    const activeDescriptionsLeftMenuElement = document.getElementById('sec-left-menu-' + activeDescription);
    const activeDescriptionElement = document.getElementById('sec-table-id' + activeDescription);
    const descriptionsElement = document.getElementById('sec-table-id' + arg);
    const descriptionsLeftMenuElement = document.getElementById('sec-left-menu-' + arg);
    activeDescriptionsLeftMenuElement.style.boxShadow = 'none';
    activeDescriptionsLeftMenuElement.style.backgroundColor = 'var(--gray-color)';
    activeDescriptionsLeftMenuElement.style.color = 'black';
    activeDescriptionElement.style.boxShadow = 'none';
    activeDescriptionElement.className = unshow;
    //
    descriptionsElement.className = show;
    descriptionsLeftMenuElement.style.boxShadow = '0 0 10px 1px black';
    descriptionsLeftMenuElement.style.backgroundColor = 'var(--active-color)';
    descriptionsLeftMenuElement.style.color = 'white';
    descriptionsElement.style.boxShadow = '0 0 10px 1px var(--active-color)';
    localStorage.setItem('activeDescription', arg);
}

var i = 0;
var txt = "Wprowadź&nlJakość z&nlNaszą Pomocą!";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) == "&" & txt.charAt(i+1) == "n" & txt.charAt(i+2) == "l") {
            i++;
            i++;
            i++;
            document.getElementById("main-text").innerHTML += "<br>";
            console.log(1);
        } else {
            document.getElementById("main-text").innerHTML += txt.charAt(i);
            i++;
        }
        setTimeout(typeWriter, speed);
    }
}