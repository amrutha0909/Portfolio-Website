document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    document.addEventListener('mousemove', (e) => {
        const blurs = document.querySelectorAll('.bg-blur');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blurs[0].style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        if(blurs[1]) {
            blurs[1].style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    });

    const leftBtn = document.getElementById('achievements-left');
    const rightBtn = document.getElementById('achievements-right');
    const slider = document.getElementById('achievements-slider');

    if (leftBtn && rightBtn && slider) {
        leftBtn.addEventListener('click', () => {
            const cardWidth = slider.querySelector('.achievement-card').offsetWidth + 20; // 20 is the gap
            slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            const cardWidth = slider.querySelector('.achievement-card').offsetWidth + 20;
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }
});
