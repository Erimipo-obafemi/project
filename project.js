const btn = document.querySelector(".menu-icon .btn");
let nav = document.querySelector(".nav_right");
// let nav = document.querySelector(".nav_left")
const close = document.querySelector(".close-menu");

console.log(btn);

btn.onclick =()=>{
    // alert('working');
    nav.style.display = 'block';
    btn.style.display = 'none';
}
close.onclick =()=>{
    // alert('working');
    nav.style.display = 'none';
    btn.style.display = 'block';
}

// const btn = document.querySelector('.close');
// const nav = document.querySelector('nav');

// btn.onclick =()=>{
//     // alert('working')
//     if(nav.style.display === 'block'){
//         nav.style.display = 'none';
//         btn.src = './images/icon-menu.svg';
//     }else{
//         nav.style.display = 'block';
//         btn.src = './images/icon-close.svg';
//     }
// }