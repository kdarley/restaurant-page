function createFooter(){
    const footer = document.createElement("div")
    footer.classList.add("footer")
    footer.textContent = "100 Fake El-Paso Address Drive"

    return footer
};

export {createFooter};