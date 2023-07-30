import './style.css';
import ImageOne from './assets/Burger.jpg'
import ImageTwo from './assets/Meatballs.jpg'
import ImageThree from './assets/Pancake.jpg'
import ImageFour from './assets/Porkchop.jpg'
import ImageFive from './assets/Salad.jpg'
import ImageSix from './assets/Veggie.jpg'


const createMenu = () => {
    const content = document.getElementById('main-content')
    
    const menu = document.createElement('div')
    menu.classList.add('menu-container')
    menu.setAttribute = ('data-content')
    menu.id = ('menu')

    const header = document.createElement('div')
    header.classList.add('menu-header')
    menu.appendChild(header)

    const h1 = document.createElement('h1')
    h1.textContent = 'Our Menu'
    header.appendChild(h1)
    
    const burgerAnchor = document.createElement('a')
    burgerAnchor.setAttribute = ('href', '#')
    const meatballsAnchor = document.createElement('a')
    meatballsAnchor.setAttribute = ('href', '#')
    const pancakeAnchor = document.createElement('a')
    pancakeAnchor.setAttribute = ('href', '#')
    const porkchopAnchor = document.createElement('a')
    porkchopAnchor.setAttribute = ('href', '#')
    const saladAnchor = document.createElement('a')
    saladAnchor.setAttribute = ('href', '#')
    const veggieAnchor = document.createElement('a')
    veggieAnchor.setAttribute = ('href', '#')

    const burger = new Image()
    burger.src = ImageOne
    const meatballs = new Image()
    meatballs.src = ImageTwo
    const pancake = new Image()
    pancake.src = ImageThree
    const porkchop = new Image()
    porkchop.src = ImageFour
    const salad = new Image()
    salad.src = ImageFive
    const veggie = new Image()
    veggie.src = ImageSix

    burgerAnchor.appendChild(burger)
    meatballsAnchor.appendChild(meatballs)
    pancakeAnchor.appendChild(pancake)
    porkchopAnchor.appendChild(porkchop)
    saladAnchor.appendChild(salad)
    veggieAnchor.appendChild(veggie)

    const burgerTextContainer = document.createElement('div')
    burgerTextContainer.classList.add('text-container')
    const burgerName = document.createElement('p')
    burgerName.textContent = 'Burger'
    const burgerPrice = document.createElement('p')
    burgerPrice.textContent = '$69'
    burgerTextContainer.appendChild(burgerName)
    burgerTextContainer.appendChild(burgerPrice)

    const meatballsTextContainer = document.createElement('div')
    meatballsTextContainer.classList.add('text-container')
    const meatballsName = document.createElement('p')
    meatballsName.textContent = 'Meatballs'
    const meatballsPrice = document.createElement('p')
    meatballsPrice.textContent = '$69'
    meatballsTextContainer.appendChild(meatballsName)
    meatballsTextContainer.appendChild(meatballsPrice)

    const pancakeTextContainer = document.createElement('div')
    pancakeTextContainer.classList.add('text-container')
    const pancakeName = document.createElement('p')
    pancakeName.textContent = 'Pancake'
    const pancakePrice = document.createElement('p')
    pancakePrice.textContent = '$69'
    pancakeTextContainer.appendChild(pancakeName)
    pancakeTextContainer.appendChild(pancakePrice)

    const porkchopTextContainer = document.createElement('div')
    porkchopTextContainer.classList.add('text-container')
    const porkchopName = document.createElement('p')
    porkchopName.textContent = 'Porkchop'
    const porkchopPrice = document.createElement('p')
    porkchopPrice.textContent = '$69'
    porkchopTextContainer.appendChild(porkchopName)
    porkchopTextContainer.appendChild(porkchopPrice)

    const saladTextContainer = document.createElement('div')
    saladTextContainer.classList.add('text-container')
    const saladName = document.createElement('p')
    saladName.textContent = 'Salad'
    const saladPrice = document.createElement('p')
    saladPrice.textContent = '$69'
    saladTextContainer.appendChild(saladName)
    saladTextContainer.appendChild(saladPrice)

    const veggieTextContainer = document.createElement('div')
    veggieTextContainer.classList.add('text-container')
    const veggieName = document.createElement('p')
    veggieName.textContent = 'Veggie'
    const veggiePrice = document.createElement('p')
    veggiePrice.textContent = '$69'
    veggieTextContainer.appendChild(veggieName)
    veggieTextContainer.appendChild(veggiePrice)

    burgerAnchor.appendChild(burgerTextContainer)
    meatballsAnchor.appendChild(meatballsTextContainer)
    pancakeAnchor.appendChild(pancakeTextContainer)
    porkchopAnchor.appendChild(porkchopTextContainer)
    saladAnchor.appendChild(saladTextContainer)
    veggieAnchor.appendChild(veggieTextContainer)

    // burgerAnchor.innerHTML = `<img src='./assets/Burger.jpg' alt='burger'><div class='text-container'><p>Burger</p><p>$69</p></div>`
    // meatballsAnchor.innerHTML = `<div class='text-container'><p>Beach Meatballs</p><p>$69</p></div>`
    // pancakeAnchor.innerHTML = `<div class='text-container'><p>Pancake</p><p>$69</p></div>`
    // porkchopAnchor.innerHTML = `<div class='text-container'><p>Best Porkchop</p><p>$69</p></div>`
    // saladAnchor.innerHTML = `<div class='text-container'><p>Some Salad</p><p>$69</p></div>`
    // veggieAnchor.innerHTML = `<div class='text-container'><p>Vegan Supreme</p><p>$69</p></div>`

    menu.appendChild(burgerAnchor)
    menu.appendChild(meatballsAnchor)
    menu.appendChild(pancakeAnchor)
    menu.appendChild(porkchopAnchor)
    menu.appendChild(saladAnchor)
    menu.appendChild(veggieAnchor)

    content.appendChild(menu)
}


export default createMenu