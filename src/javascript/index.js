window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercantage = scrollPosition / viewportHeight;
    var logo = document.querySelector('.logo');

    if (scrollPercantage > 0.75) {
        if (!navbar.classList.contains('nav-scrolled') && !navbar.classList.contains('navLogoScrolled')) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('nav-unscrolled');
            logo.classList.add('navLogoScrolled');
            console.log("menim:)");
        }
    } else {
        if (navbar.classList.contains('nav-scrolled') || logo.classList.contains('navLogoScrolled')) {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.add('nav-unscrolled');
            logo.classList.remove('navLogoScrolled');
            logo.classList.add('navLogoUnscrolled')
            console.log("menim");
        }
    }
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burgerMenu');
    const navLinks = document.querySelectorAll('.navLinksH li');
    const foldMenu = document.querySelector('.fold-out-menu');
    const aMenu = document.querySelector('.a-menu');
    const foldPivo = document.querySelector('.fold-out-pivo');
    const aPivo = document.querySelector('.a-pivo');
    const main = document.querySelector('.main');
    const main2 = document.querySelector('.main2');
    const foldPivoBurger = document.querySelector('.burgerFoldPivo');
    const foldMenuBurger = document.querySelector('.burgerFoldMenu');
    const burgerAmenu = document.querySelector('.burgerAmenu');
    const burgerApivo = document.querySelector('.burgerApivo');

    burgerApivo.addEventListener('click', () => {
        burgerApivo.classList.remove('burgerApivo')
        burgerApivo.classList.add('burgerApivo-hidden');
        burgerAmenu.classList.add('burgerAmenu-visible');
        burgerAmenu.classList.remove('burgerAmenu-hidden');
        foldPivoBurger.classList.remove('foldPivo-hidden');
        foldPivoBurger.classList.add('foldPivo-visible');
        foldMenuBurger.classList.remove('foldMenu-visible');
        foldMenuBurger.classList.add('foldMenu-hidden');
    })

    burgerAmenu.addEventListener('click', () => {
        burgerApivo.classList.add('burgerApivo')
        burgerApivo.classList.remove('burgerApivo-hidden');
        burgerAmenu.classList.remove('burgerAmenu-visible');
        burgerAmenu.classList.add('burgerAmenu-hidden');
        foldPivoBurger.classList.add('foldPivo-hidden');
        foldPivoBurger.classList.remove('foldPivo-visible');
        foldMenuBurger.classList.add('foldMenu-visible');
        foldMenuBurger.classList.remove('foldMenu-hidden');
    })

    /* main2.addEventListener('click', () => {
         foldMenu.classList.add('fold-out-menu-hidden');
         foldPivo.classList.add('fold-out-pivo-hidden');
     });

     main.addEventListener('click', () => {
         foldMenu.classList.add('fold-out-menu-hidden');
         foldPivo.classList.add('fold-out-pivo-hidden');
     });*/

    aPivo.addEventListener('click', () => {
        foldPivo.classList.toggle('fold-out-pivo-hidden');
        foldMenu.classList.add('fold-out-menu-hidden');
    });

    aMenu.addEventListener('click', () => {
        foldMenu.classList.toggle('fold-out-menu-hidden');
        foldPivo.classList.add('fold-out-pivo-hidden');
    });

    /*if (foldMenu.classList.contains('fold-out-menu-hidden')) {
        aMenu.classList.remove('foldOutActive');
    } else {
        aMenu.classList.add('foldOutActive');
    }*/

    burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        foldPivoBurger.classList.add('foldPivo-hidden');
        foldPivoBurger.classList.remove('foldPivo-visible');
        foldMenuBurger.classList.remove('foldMenu-visible');
        foldMenuBurger.classList.add('foldMenu-hidden');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`;
            }
        });
    });
    const companyTextBox = document.querySelector('.companyName');

    function companyHover() {
        companyTextBox.classList.add('hoverCompany');
    }

    function companyHoverLeave() {
        companyTextBox.classList.remove('hoverCompany');
    }

}
navSlide();

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.to('.text', {y: '0%', duration: 0.5, stagger: 0.2, opacity: 1});
tl.to('.slider', {y: "-100%", duration: 0.7, delay: 0.7});
tl.to('.intro', {y: "-100%", duration: 0.25}, "-=0.5");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 0.5});
tl.fromTo(".custom-shape-divider-top-16872040701", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.5");
tl.fromTo(".fill", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.5");
tl.fromTo(".grid-container", {opacity: 0}, {opacity: 1, duration: 0.5})
wasPlayed = false;


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    })
    tl.set(".loading-screen", {left: "-100%"});
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1, y: 5, opacity: 0, stagger: 0.4, delay: 1
    });
}

$(function () {
    barba.init({
        sync: true,
        transitions: [
            {
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    contentAnimation();
                },
                async once(data) {
                    contentAnimation();
                }
            },
        ],
    });
});