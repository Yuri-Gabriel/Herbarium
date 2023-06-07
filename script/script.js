var menuBarIsOpen = false;
const closeMenu = document.querySelector("img#closeBtn");
const openMenu = document.querySelector("img#menuBtn");
const menuBar = document.querySelector("header nav")
const menuBarLinks = document.querySelectorAll("header nav a");
const BtnMenu = document.querySelectorAll("header img");
closeMenu.style.display = "none";

var windowWidth;
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    if (windowWidth > 750) {
        menuBar.style.cssText = "border: none;width: 100%;align-items: center;justify-content: space-evenly;flex-wrap: wrap;flex-direction: row;margin-left: 0;top: 0;position: relative;background-color: transparent;";
        menuBarLinks.forEach((element, key) => {
            element.style.cssText = "border: none;margin: 2px 0;padding: 5px;width: 90px;text-align: center;color: #FFFFFF;text-decoration: none;cursor: pointer;"
            
            if (key == 3) {
                element.style.cssText = "border: none;margin: 2px 0;padding: 5px;width: 155px;text-align: center;color: #FFFFFF;text-decoration: none;cursor: pointer;"
            }
        });
        BtnMenu.forEach((element) => {
            element.style.display = "none";
        })
    } else {
        menuBar.style.cssText = "z-index: -1;position: absolute;top: -160px;right: 0;left: 0;bottom: 0;height: 160px;display: flex;flex-direction: column;background-color: var(--VerdeClaro);transition: all 0.1s linear;";
        menuBarLinks.forEach((element) => {
            element.style.cssText = "border: 1px solid black;height: 40px;width: 100%;text-align: center;color: #000000;font-weight: bold;text-decoration: none;padding-top: 8px;"
        });
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    }
});


BtnMenu.forEach((element) => {
    if (windowWidth < 750) {
        element.style.display = "none"
    }
    element.addEventListener("click", () => {
        if (menuBarIsOpen) {
            OpenMenu();
        } else {
            CloseMenu();
        }
        
    });
})

const navButtons = document.querySelectorAll("nav a");
navButtons.forEach((value) => {
    value.addEventListener("click", () => {
        CloseMenu();
    });
});


const OpenMenu = () => {
    menuBar.style.transform = "translateY(256px) rotateX(0deg)" //256
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
    menuBarIsOpen = false;
}

const CloseMenu = () => {
    menuBar.style.transform = "translateY(200px) rotateX(90deg)";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    menuBarIsOpen = true;
}

