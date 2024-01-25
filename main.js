let menuEmail = document.querySelector(".navbar-email") 
let desktopMenu = document.querySelector(".desktop-menu") 
let menuHamburguesa = document.querySelector(".menu") 
let mobileMenu = document.querySelector(".mobile-menu") 
let carrito = document.querySelector(".navbar-shopping-cart") 
let cartDitail = document.querySelector(".product-detail") 


let toogleShoppingCart =()=> {
    cartDitail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
carrito.addEventListener('click', toogleShoppingCart);

let toogleMobileMenu =()=> {
    mobileMenu.classList.toggle('inactive')
    cartDitail.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
menuHamburguesa.addEventListener('click', toogleMobileMenu);

let toggleDesktopMenu =()=>{ 
    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
    cartDitail.classList.add('inactive')
}
menuEmail.addEventListener('click',toggleDesktopMenu);