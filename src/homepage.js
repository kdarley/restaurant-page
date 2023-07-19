import hero from './images/ff.png'

function createHomepage(){
    const main = document.createElement("div")
    main.classList.add("main")

    // title
    const titleDiv = document.createElement("div")
    titleDiv.classList.add("title")
    const title = document.createElement("h1")
    title.textContent = "Darley's Smokin' Hot Chicken Wings"
    titleDiv.appendChild(title)

    main.appendChild(titleDiv)

    // description
    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add("business-description")
    descriptionDiv.textContent = "Darley's wings are hotter than a 3-alarm fire. All our wing flavors were created by firefighters who love to cook, and a portion of all sales go to the families of disabled firefighters."

    main.appendChild(descriptionDiv)

    // hero image
    const heroImageDiv = document.createElement("div")
    heroImageDiv.classList.add("hero-image-container")

    const heroImage = document.createElement("img")
    heroImage.classList.add("homepage-hero-image")
    heroImage.setAttribute("src", hero)

    heroImageDiv.appendChild(heroImage)
    main.appendChild(heroImageDiv)

    // hours of operation
    const hoursDiv = document.createElement("div")
    hoursDiv.classList.add("hours")

    const hoursTitle = document.createElement("h2")
    hoursTitle.textContent = "Hours"

    hoursDiv.appendChild(hoursTitle)

    const unorderedList = document.createElement("ul")
    const sun = document.createElement("li")
    sun.textContent = "Sunday: 8am - 4pm"
    const mon = document.createElement("li")
    mon.textContent = "Monday: 8am - 9pm"
    const tue = document.createElement("li")
    tue.textContent = "Tuesday: 8am - 9pm"
    const wed = document.createElement("li")
    wed.textContent = "Wednesday: 8am - 9pm"
    const thu = document.createElement("li")
    thu.textContent = "Thurdsday: 8am - 9pm"
    const fri = document.createElement("li")
    fri.textContent = "Friday: 8am - 9pm"
    const sat = document.createElement("li")
    sat.textContent = "Saturday: 8am - 1am"
    
    unorderedList.appendChild(sun)
    unorderedList.appendChild(mon)
    unorderedList.appendChild(tue)
    unorderedList.appendChild(wed)
    unorderedList.appendChild(thu)
    unorderedList.appendChild(fri)
    unorderedList.appendChild(sat)

    hoursDiv.appendChild(unorderedList)

    main.appendChild(hoursDiv)

    return main
}

export {createHomepage};