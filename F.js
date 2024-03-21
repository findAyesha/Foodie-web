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

let darkMode = document.querySelector('#darkmode');
let body = document.body;

darkMode.onclick = () => {
    if(darkMode.classList.contains('bx-moon')){
        darkMode.classList.replace('bx-moon','bx-sun');
        body.classList.add('dark-mode','active'); 
    } else {
        darkMode.classList.replace('bx-sun','bx-moon');
        body.classList.remove('dark-mode','active'); 
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

