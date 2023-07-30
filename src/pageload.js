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
        ul.classList.add('navList')

        const home = document.createElement('a')
        home.textContent = ('Home')
        home.setAttribute('data-btn', 'home')
        home.classList.add('menuItem')
        home.setAttribute('href', '#')

        const menu = document.createElement('a')
        menu.setAttribute('data-btn', 'menu')
        menu.setAttribute('href', '#')
        menu.classList.add('menuItem')
        menu.textContent = ('Menu')

        const about = document.createElement('a')
        about.textContent = ('About Us')
        about.setAttribute('data-btn', 'about')
        about.classList.add('menuItem')
        about.setAttribute('href', '#')

        const li1 = document.createElement('li')
        const li2 = document.createElement('li')
        const li3 = document.createElement('li')

        // Hamburger Menu

        const hamburger = document.createElement('div')
        hamburger.classList.add('hamburger')

        const openMenu = document.createElement('i')
        const closeBtn = document.createElement('i')
        openMenu.classList.add('fa-solid')
        openMenu.classList.add('fa-bars')
        openMenu.id = 'openMenu-btn'
        closeBtn.classList.add('fa-solid')
        closeBtn.classList.add('fa-xmark')
        closeBtn.id = 'close-btn'

        hamburger.appendChild(closeBtn)
        hamburger.appendChild(openMenu)
        header.appendChild(navbar)
        navbar.appendChild(hamburger)
        header.classList.add('header')

        navbar.classList.add('navbar')
        navbar.appendChild(ul)

        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)

        li1.appendChild(home)
        li2.appendChild(menu)
        li3.appendChild(about)

        // navbar event listener
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

           // hamburger menu event listener
        const hamburgerDiv = document.querySelector('.hamburger')
        hamburgerDiv.addEventListener('click', toggleMenu)
        const menuItem = document.querySelectorAll('.menuItem')
        menuItem.forEach(item => item.addEventListener('click', toggleMenu))

        body.appendChild(content)
        content.appendChild(createHome())
}

const toggleMenu = () => {
        // hamburger menu event listener
        const navList = document.querySelector('.navList')
        const closeIcon = document.getElementById('close-btn')
        const menuIcon = document.getElementById('openMenu-btn')
        
        if (navList.classList.contains('showMenu'))   {
                navList.classList.remove('showMenu')
                closeIcon.style.display = 'none'
                menuIcon.style.display = 'block'
        } else if (!navList.classList.contains('showMenu')) {
                navList.classList.add('showMenu')
                closeIcon.style.display = 'block'
                menuIcon.style.display = 'none'
        }
}

export default createPage;
