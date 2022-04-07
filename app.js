const navSlide = () => {
    const menu1 = document.querySelector('.menu1');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu1.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        menu1.classList.toggle('toggle');

        if (window.innerWidth < 400 && nav.style.opacity == "1" && nav.style.width == "100%") {
            nav.style.opacity = "0";
            nav.style.width = "0%";
        } else {
            nav.style.opacity = "1";
            nav.style.width = "100%";
        }
        
        console.log(navLinks.width);
    });
}

navSlide();

var typed = new Typed(".auto-type", {
    strings: ['HotBot', 'Discord', 'HotBot', "V2..."],
    
    startDelay: 1500,
    backDelay: 1000,
    typeSpeed: 120,
    backSpeed: 120,
    cursorChar: '_',
    loop: true
    })