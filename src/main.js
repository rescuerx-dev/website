const navbar = document.querySelector('.nav-mobile');
const listElem = document.querySelector('.nav-list');
const navIcon = document.querySelector('.fa-bars');
navbar.addEventListener('click', (e)=>{
    listElem.classList.toggle('show');
    navIcon.classList.toggle('fa-times');
    
})