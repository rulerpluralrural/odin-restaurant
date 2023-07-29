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
    burgerAnchor.innerHTML += '<div class=\'text-container\'></div><p>Burger</p><p>$69</p></div>';
    meatballsAnchor.appendChild(meatballs)
    meatballsAnchor.innerHTML += '<div class=\'text-container\'></div><p>Beach Meatballs</p><p>$69</p></div>';
    pancakeAnchor.appendChild(pancake)
    pancakeAnchor.innerHTML +='<div class=\'text-container\'></div><p>Pancake</p><p>$69</p></div>';
    porkchopAnchor.appendChild(porkchop)
    porkchopAnchor.innerHTML += '<div class=\'text-container\'></div><p>Best Porkchop</p><p>$69</p></div>';
    saladAnchor.appendChild(salad)
    saladAnchor.innerHTML += '<div class=\'text-container\'></div><p>Some Salad</p><p>$69</p></div>';
    veggieAnchor.appendChild(veggie)
    veggieAnchor.innerHTML += '<div class=\'text-container\'></div><p>Vegan Supreme</p><p>$69</p></div>';

    menu.appendChild(burgerAnchor)
    menu.appendChild(meatballsAnchor)
    menu.appendChild(pancakeAnchor)
    menu.appendChild(porkchopAnchor)
    menu.appendChild(saladAnchor)
    menu.appendChild(veggieAnchor)

    content.appendChild(menu)
}


export default createMenu