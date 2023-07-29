import './style.css'

const createAbout = () => {
    const content = document.getElementById('main-content')

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('about-container')
    aboutContainer.setAttribute = ('data-content')
    aboutContainer.id = ('about')

    aboutContainer.innerHTML = 
    `<div class='about-header'>
        <h1>About Us</h1>
        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>
    </div>
    <div class='about-body'>
        <h1>Contact Us</h1>
        <div class='contact'>
            <div class='contact-info'>
                <p><i class="fa-solid fa-location-pin"></i> BLS 1711, Blk 1 Spratly Islands, Parañaque, 1700 Metro Manila</p>
                <p><i class='fa-solid fa-clock'></i> Mon-Thurs: 8:am - 8pm</p>
                <p><i class='fa-solid fa-clock'></i> Fri-Sun: 8:am - 11pm</p>
                <p><i class='fa-solid fa-phone'></i> (123)-456-7890</p>
            </div>
            <div class='form-container'>
                <p><i class='fa-solid fa-envelope'></i> Message Us</p>
                <form action="#" id="form">
                    <input type='text' id='name' name='full-name' placeholder='FullName' required>
                    <input type='email' id='email' name='email' placeholder='Email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required>
                    <textarea id='message' name='message' placeholder='Type your message here...'></textarea>
                    <button type='submit' id='submit-btn' class='submit-btn'>Submit</button>
                </form>
            </div>
            <div class='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.43665800164945!2d121.01829290276456!3d14.485462850055601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfcd9b02c175%3A0xeec6233ea0b9c076!2sSpratly%20Street!5e0!3m2!1sen!2sph!4v1690631967814!5m2!1sen!2sph" width="550" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>`
    
    content.appendChild(aboutContainer)
}

export default createAbout