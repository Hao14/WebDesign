const navSlide = () => {
    const menu1 = document.querySelector('.menu1');
    const nav = document.querySelector('.nav-links');

    menu1.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

