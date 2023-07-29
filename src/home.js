import './style.css';
import frontPageImage from './assets/front-pg-img.jpg';
import imageOne from './assets/Burger.jpg';
import imageTwo from './assets/Salad.jpg';
import imageThree from './assets/Porkchop.jpg';

const createHome = () => {
    const content = document.getElementById('main-content')

    const home = document.createElement('div')
    home.setAttribute = ('data-content')
    home.id = ('home')

    const hero = document.createElement('div')
    hero.classList.add('hero')
    hero.id = ('hero')

    //left hero section
    const leftContainer = document.createElement('div')
    leftContainer.classList.add('left-container')
    const introHeader = document.createElement('h1')
    introHeader.textContent = 'Try Something Good '
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
    bottomContainer.id = ('bottom-container')

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
    imgThreeText.textContent = 'Our Best Seller Porkchop $69'
    imgContainerThree.classList.add('img-container')
    imgContainerThree.classList.add('img-container-three')

    const imgOne = new Image()
    imgOne.src = imageOne
    const imgTwo = new Image()
    imgTwo.src = imageTwo
    const imgThree = new Image()
    imgThree.src = imageThree

    imgContainerOne.appendChild(imgOne)
    imgContainerOne.appendChild(imgOneText)
    imgContainerTwo.appendChild(imgTwo)
    imgContainerTwo.appendChild(imgTwoText)
    imgContainerThree.appendChild(imgThree)
    imgContainerThree.appendChild(imgThreeText)
    bottomContainer.appendChild(imgContainerOne)
    bottomContainer.appendChild(imgContainerTwo)
    bottomContainer.appendChild(imgContainerThree)

    home.appendChild(hero)
    home.appendChild(bottomContainer)
    content.appendChild(home)
}

export default createHome