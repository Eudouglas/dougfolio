/*==================== scroll reveal ===========================*/
ScrollReveal({ 
    reset: true,
    distance: '15px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, .projetos-box, .contato form, .pjBtn', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,  .sobre-img, .habilidade-left', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content, .habilidade-right', {origin: 'right' });

/*==================== toogle icon navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ===========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
        
    });
/*==================== sticky navbar ===========================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar whem click navbar (scroll) ===========================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};  

/*==================== typed js ===========================*/

const typed = new Typed('.multiple-text',{
    strings:['Front-End Developer','Back-End Developer', 'Designer Gráfico',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== mix it up portfolio section ===========================*/
var mixer = mixitup ('.projetos-container');

/*=================== habilidade ================================*/
const circles = document.querySelectorAll('.circulo');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var ponteiro = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        ponteiro += `<div class="ponteiro" style="--i:${i}; --root:${rotate}deg"></div>`;
    }
    elem.innerHTML = ponteiro;

    const ponteiroMarked = elem.querySelectorAll('.ponteiro');
    for(let i = 0; i<percent ; i++){
        ponteiroMarked[i].classList.add('marked')
    }
})
