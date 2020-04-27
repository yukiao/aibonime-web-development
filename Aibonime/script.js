const burgerMenu = document.querySelector('.burger-menu');
const navBar = document.getElementById('navbar');

let active = false;
burgerMenu.addEventListener('click',function(){
    navBar.classList.toggle('hidden');
});