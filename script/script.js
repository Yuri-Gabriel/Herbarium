var menuBarIsOpen = false;
var windowWidth = window.innerWidth;
localStorage.clear();

const closeMenuImg = "./style/img/close.png";
const openMenuImg = "./style/img/menu.png";

const menuBar = document.querySelector("header nav")
const menuBarLinks = document.querySelectorAll("header nav a");
const BtnMenu = document.querySelector("header img");


window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    if (windowWidth > 750) {
        BtnMenu.setAttribute("src", openMenuImg);
    } else {
        BtnMenu.setAttribute("src", openMenuImg);
    }
    menuBar.style.transform = ""
});


BtnMenu.addEventListener("click", () => {
    if (menuBarIsOpen) {
        OpenMenu();
    } else {
        CloseMenu();
    }
    
});

const navButtons = document.querySelectorAll("nav a");

navButtons.forEach((value) => {
    value.addEventListener("click", () => {
        if (windowWidth < 750) {
            CloseMenu();
        }
        
    });
});


const OpenMenu = () => {
    menuBar.style.transform = "translateY(256px) rotateX(0deg)" //256
    BtnMenu.setAttribute("src", closeMenuImg);
    menuBarIsOpen = false;
}

const CloseMenu = () => {
    menuBar.style.transform = "translateY(200px) rotateX(90deg)";
    BtnMenu.setAttribute("src", openMenuImg);
    menuBarIsOpen = true;
}

const btnArroz = document.querySelector("button#Arroz");
const btnHamburguer = document.querySelector("button#Hamburguer");
const btnMoqueca = document.querySelector("button#Moqueca");

btnArroz.addEventListener("click", () => {
    localStorage.setItem("receita", "arroz")
    window.location = "../receita.html";
});
btnHamburguer.addEventListener("click", () => {
    localStorage.setItem("receita", "hamburguer");
    window.location = "../receita.html";
});
btnMoqueca.addEventListener("click", () => {
    localStorage.setItem("receita", "moqueca");
    window.location = "../receita.html";
});