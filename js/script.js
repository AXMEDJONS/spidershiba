let button__menu = document.querySelector('.burger__menu')
let navigation__menu = document.querySelector('.header__links')
let top__line = document.querySelector('.top__line')
let center__line = document.querySelector('.center__line')
let bottom__line = document.querySelector('.bottom__line')

button__menu.addEventListener('click', function () {
    navigation__menu.classList.toggle('active')
    top__line.classList.toggle('rotate__top')
    center__line.classList.toggle('delete__center')
    bottom__line.classList.toggle('rotate__bottom')
})