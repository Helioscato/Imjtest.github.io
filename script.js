// /*==================== toggle icon navbar ====================*/



// /*==================== toggle icon navbar ====================*/

// /*==================== scroll sections active link ====================*/

//     /*==================== sticky navbar ====================*/

//     /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/


// /*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
// /*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings : ['Experienced Staff','Best Quality','Ready For Work'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});