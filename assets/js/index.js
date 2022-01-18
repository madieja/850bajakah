// General Functions
function testalert(){
    document.body.onclick = () => alert("body clicked");
}

function closeParent(e){
    e.currentTarget.parentElement.remove();
}

function featherReplace() {
    if (feather) {
        feather.replace();
    }
}

function drawerTrigger() {
    let triggers = document.querySelectorAll('.drawer-trigger');
    let anchors = document.querySelectorAll('.drawer-anchors li');
    let drawerTL = gsap.timeline({paused: true});
    drawerTL.to('.site-drawer', 0.4, {x:0, opacity:1, visibility:'visible', ease:"power3.out"});
    drawerTL.from('.site-drawer .drawer-content', 0.4, {opacity:0, y:40, stagger: 0.2}, "-=0.2");

    triggers.forEach(function(trigger) {
        trigger.onclick = function() {
            let menu = this.querySelector('.hamburger');
            menu.classList.toggle('is-active');
            
            if (menu.classList.contains('is-active')) {
                document.body.classList.add('lock');
                drawerTL.play();
            } else {
                document.body.classList.remove('lock');
                drawerTL.reverse(0.5);
            }
        }
    })

    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e){
            let menus = document.querySelectorAll('.hamburger');
            window.setTimeout(function(){
                menus.forEach(function(menu){
                    if(menu.classList.contains('is-active')) {
                        menu.classList.remove('is-active');
                    }
                });
                document.body.classList.remove('lock');
                drawerTL.reverse(0.5);
            }, 300)
            
        })
    })

}

function PageEnter() {
    let page = gsap.to('main', 1, {opacity:1, y:0, ease:'power3.out'});
}

function throttle(fn, delay) {
    var lastTime = 0;
    return function (...args) {
        const currentTime = new Date().getTime();
        if((currentTime - lastTime) < delay) {
          return;
        };
        lastTime = currentTime;
        return fn(...args);
    }
};

function navigation() {
    lastScroll = 0;
    var nav = document.querySelector('#header-fixed');

    var scrollDetect = function() {
        let currentScroll = window.pageYOffset; // Get Current Scroll Value
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          nav.classList.remove('active');
        }else{
          lastScroll = currentScroll;
          nav.classList.add('active');
        }
    }

    window.addEventListener('scroll', throttle(function(e) {
        if(window.pageYOffset < 350) {
            nav.classList.remove('active');
        } else {
            nav.classList.add('active');
        }
    },10))
}

// Bajakah Functions
function slider1start() {
    let slider_1 = new Swiper('#image-slider-1', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.slider-1-next',
            prevEl: '.slider-1-prev',
        },
        pagination: {
            el: '.slider-1-pagination',
            dynamicBullets: true,
        }
    })
}
function slider_testimoni_start() {
    var testimoni_slider = new Swiper("#testimoni-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".slider-testimoni-pagination",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
      });
    
}
function slider_content_trust_start() {
    var content_trust_slider = new Swiper("#content-trust-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".slider-content-trust-pagination",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
      });
    
}

// INITIALIZATION
//=============================================================================

// Bajakah Init
function initBajakah() {
    PageEnter();
    featherReplace();
    drawerTrigger();
    navigation();
    slider1start();
    slider_testimoni_start();
    slider_content_trust_start();
}


// Init on load
window.addEventListener('load', function() {
    switch(true) {
        case Boolean(document.getElementById('home')) :
            initBajakah();
            break;
        default:
            PageEnter();
            featherReplace();
            drawerTrigger();
    }
})