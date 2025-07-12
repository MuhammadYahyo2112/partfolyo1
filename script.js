
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    burger.classList.toggle('toggle');
    
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
      
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = contactForm.querySelector('textarea').value;
        
        
        console.log({ name, email, subject, message });
        
        alert('Xabaringiz uchun rahmat! Tez orada siz bilan bog\'lanaman.');
        
        
        contactForm.reset();
    });
}

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .about-stats .stat-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .about-stats .stat-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

const projectScreenshots = {
    'mars-core': 'mars-core-screenshot.jpg',
    'pokemon': 'pokemon-screenshot.jpg',
    'transform': 'transform-screenshot.jpg',
    'evarugs': 'evarugs-screenshot.jpg',
    'clock': 'clock-screenshot.jpg',
    'animation': 'animation-screenshot.jpg'
};

