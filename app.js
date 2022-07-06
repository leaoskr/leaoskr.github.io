const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// document.addEventListener('scroll', ()=>{
//     var scroll_position = window.scrollY;
//     if(scroll_position>100){
//         header.style.backgroundColor = "lightyellow";
//     }else{
//         header.style.backgroundColor = "transparent";
//     }
// })