const btnMenu = document.querySelector('.js-toggle-menu');
const navMenuMobile = document.querySelector('.js-mobile-menu');


btnMenu.addEventListener('click', function(e){
    btnMenu.classList.toggle('btn-menu-open');
    navMenuMobile.classList.toggle('open-menu');
})

window.addEventListener('click', function(e){
    if (!navMenuMobile.contains(e.target) && !btnMenu.contains(e.target)) {        
        btnMenu.classList.remove('btn-menu-open');
        navMenuMobile.classList.remove('open-menu');
    }
})