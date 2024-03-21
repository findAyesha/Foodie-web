// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})

let darkmod = document.querySelector('#darkmode');
let body = document.body;

darkmod.onclick = () => {
    if(darkmod.classList.contains('bx-moon')){
        darkmod.classList.replace('bx-moon','bx-sun');
        body.classList.add('dark-mode'); // Add a class to body for dark mode
    } else {
        darkmod.classList.replace('bx-sun','bx-moon');
        body.classList.remove('dark-mode'); // Remove dark mode class from body
    }
}

