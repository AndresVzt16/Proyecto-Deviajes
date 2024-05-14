const toogle = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.toggle-menu')
const fondo = document.querySelector('.fondo-menu')
toogle.addEventListener('click', () => {
    toogle.classList.toggle('hidden');
    toogle.classList.toggle('show');
    menu.classList.toggle('hidden')
    fondo.classList.toggle('hidden')
    
})