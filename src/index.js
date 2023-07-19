import './styles.css';

// another JS file
import { createHomepage } from './homepage.js';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { createMenu } from './menu.js';

function removeMain(){
    const main = document.querySelector(".main");
    main.remove();
};

function addHomepage(){
    const header = document.querySelector(".header")
    const main = createHomepage();
    header.insertAdjacentElement("afterend", main);
}

function addMenu(){
    const header = document.querySelector(".header")
    const main = createMenu();
    header.insertAdjacentElement("afterend", main);
}

function headerEventListeners(){
    const homeButton = document.querySelector("button.home-button");
    
    homeButton.addEventListener('click', () => {
        removeMain(),
        addHomepage();
    });

    const menuButton = document.querySelector("button.menu-button");
    
    menuButton.addEventListener('click', () => {
        removeMain(),
        addMenu();
    });

    // const menuButton = document.querySelector("button.menu-button");

    // menuButton.AddEventListener('click', () => {
    //     console.log("test"),
    //     removeMain(),
    //     addMenu();
    // });
};

function displayHome() {
    const content = document.querySelector("div#content")

    const header = createHeader();

    const main = createHomepage();
    const footer = createFooter();
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    headerEventListeners();
}


displayHome();
