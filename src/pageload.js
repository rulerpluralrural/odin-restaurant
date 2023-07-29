import './style.css';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';


const createPage = () => {
    const body = document.getElementById('content')
    const header = document.createElement('header')
    const content = document.createElement('div')
    content.id = ('main-content')
    content.classList.add('main-content')
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
    const home = document.createElement('a')
    home.textContent = ('Home')
    home.setAttribute('data-btn', 'home')
    home.classList.add('active')
    home.setAttribute('href', '#')
    const menu = document.createElement('a')
    menu.setAttribute('data-btn', 'menu')
    menu.setAttribute('href', '#')
    menu.textContent = ('Menu')
    const about = document.createElement('a')
    about.textContent = ('About')
    about.setAttribute('data-btn', 'about')
    about.setAttribute('href', '#')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')

    header.appendChild(navbar)
    header.classList.add('header')

    navbar.classList.add('navbar')
    navbar.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(home)
    li2.appendChild(menu)
    li3.appendChild(about)

    home.addEventListener('click', () => {
            content.innerHTML = ''
            createHome()
    })
    menu.addEventListener('click', () => {
            content.innerHTML = ''
            createMenu()
    })
    about.addEventListener('click', () => {
            content.innerHTML = ''
            createAbout()
    })
    
    body.appendChild(header)
    body.appendChild(content)
    content.appendChild(createHome())
}

export default createPage;
