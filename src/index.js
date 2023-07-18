import './styles.css';


// another JS file
import { createMain } from './homepage.js';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';

function displayHome() {
    const content = document.querySelector("div#content")

    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer)
}


displayHome()