const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const menulist = document.querySelectorAll('.menu>li');
const home = document.querySelectorAll('.home _header');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('open');
})

if(home){
    menulist.forEach(listItem => {
        listItem.addEventListener('click', ()=>{
            navbar.classList.toggle('open');
        })
    });
}