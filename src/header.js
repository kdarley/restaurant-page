import logo from './images/darley-logo-white.svg'
function createHeader() {
    const header = document.createElement('div');

    header.classList.add("header");

    // add image
    const image = document.createElement('img');
    image.classList.add("logo")
    image.setAttribute("src", logo)
    header.appendChild(image)

    // add buttons
    const headerButtonsDiv = document.createElement('div')
    headerButtonsDiv.classList.add("header-buttons")
    
    const homeButton = document.createElement('button')
    homeButton.textContent = "Home"
    homeButton.classList.add("home-button")
    headerButtonsDiv.appendChild(homeButton)

    const menuButton = document.createElement('button')
    menuButton.textContent = "Menu"
    menuButton.classList.add("menu-button")
    headerButtonsDiv.appendChild(menuButton)

    const contactButton = document.createElement('button')
    contactButton.textContent = "Contact"
    contactButton.classList.add("contact-button")
    headerButtonsDiv.appendChild(contactButton)

    header.appendChild(headerButtonsDiv)
    
    return header
};

export {createHeader};