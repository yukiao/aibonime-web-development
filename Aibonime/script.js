const burgerMenu = document.getElementsByClassName('burger-menu')[0];

const navBar = document.querySelector('header .container ul');
burgerMenu.addEventListener('click',function(){
    navBar.classList.toggle('hideNav');
});