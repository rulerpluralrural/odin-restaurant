import './style.css';
import frontPageImage from './assets/front-pg-img.jpg';
import imageOne from './assets/Burger.jpg';
import imageTwo from './assets/Salad.jpg';
import imageThree from './assets/Porkchop.jpg';

const createPage = () => {
    // header start //
    const body = document.getElementById('content')
    const header = document.createElement('header')
    const logoContainer = document.createElement('div')
    const logo = document.createElement('i')
    logo.classList.add('fa-solid')
    logo.classList.add('fa-utensils')
    const name = document.createElement('h1')
    name.textContent = ('Insane')
    header.appendChild(logoContainer)
    logoContainer.classList.add('logo-container')
    logoContainer.appendChild(logo)
    logoContainer.appendChild(name)

    const navbar = document.createElement('div')
    const ul = document.createElement('ul')
    const a1 = document.createElement('a')
    const a2 = document.createElement('a')
    const a3 = document.createElement('a')
    const home = document.createElement('li')
    home.textContent = ('Home')
    const menu = document.createElement('li')
    menu.textContent = ('Menu')
    const about = document.createElement('li')
    about.textContent = ('About')

    header.appendChild(navbar)
    header.classList.add('header')

    navbar.classList.add('navbar')
    navbar.appendChild(ul)
    ul.appendChild(a1)
    ul.appendChild(a2)
    ul.appendChild(a3)
    a1.appendChild(home)
    a2.appendChild(menu)
    a3.appendChild(about)

    // header end //
    // hero section start //

    const hero = document.createElement('div')
    hero.classList.add('hero')

    //left hero section
    const leftContainer = document.createElement('div')
    leftContainer.classList.add('left-container')
    const introHeader = document.createElement('h1')
    introHeader.textContent = 'Lorem Ipsum Something Good'
    const introText = document.createElement('small')
    introText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    const iconSpan = document.createElement('span')
    const introIcon = document.createElement('i')
    introIcon.classList.add('fa-solid')
    introIcon.classList.add('fa-burger')
    introHeader.appendChild(iconSpan)
    iconSpan.appendChild(introIcon)
    const viewMenu = document.createElement('button')
    viewMenu.textContent = 'View our Menu'

    leftContainer.appendChild(introHeader)
    leftContainer.appendChild(introText)
    leftContainer.appendChild(viewMenu)

    //right hero section
    const rightContainer = document.createElement('div')
    const bgBorder = document.createElement('div')
    const heroImg = new Image()
    heroImg.src = frontPageImage
    rightContainer.classList.add('right-container')
    rightContainer.appendChild(bgBorder)
    rightContainer.appendChild(heroImg)

    hero.appendChild(leftContainer)
    hero.appendChild(rightContainer)

    //hero section end
    //bottom section start

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const imgContainerOne = document.createElement('div')
    const imgOneText = document.createElement('a')
    imgOneText.textContent = 'Our Best Seller Burger $69'
    imgContainerOne.classList.add('img-container')
    imgContainerOne.classList.add('img-container-one')

    const imgContainerTwo = document.createElement('div')
    const imgTwoText = document.createElement('a')
    imgTwoText.textContent = 'Our Best Seller Salad $69'
    imgContainerTwo.classList.add('img-container')
    imgContainerTwo.classList.add('img-container-two')

    const imgContainerThree = document.createElement('div')
    const imgThreeText = document.createElement('a')
    imgThreeText.textContent = 'Our Best Seller Porkchop 69$'
    imgContainerThree.classList.add('img-container')
    imgContainerThree.classList.add('img-container-three')

    const imgOne = new Image()
    imgOne.src = imageOne
    const imgTwo = new Image()
    imgTwo.src = imageTwo
    const imgThree = new Image()
    imgThree.src = imageThree

    bottomContainer.appendChild(imgContainerOne)
    bottomContainer.appendChild(imgContainerTwo)
    bottomContainer.appendChild(imgContainerThree)
    imgContainerOne.appendChild(imgOne)
    imgContainerOne.appendChild(imgOneText)
    imgContainerTwo.appendChild(imgTwo)
    imgContainerTwo.appendChild(imgTwoText)
    imgContainerThree.appendChild(imgThree)
    imgContainerThree.appendChild(imgThreeText)
    
    body.appendChild(header)
    body.appendChild(hero)
    body.appendChild(bottomContainer)
}


export default createPage;