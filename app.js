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
        
    });
}

navSlide();
