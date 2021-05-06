// NAV BTN
const navBtn = document.querySelectorAll('.header__nav_link');

    navBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            let currentBtn = item;

            if(!currentBtn.classList.contains('active')) {
            navBtn.forEach(function(item) {
                item.classList.remove('active');
            });
                currentBtn.classList.add('active');
            };
        });
    });

document.querySelector('.header__nav_link:nth-child(1)').click();

// BURGER MENU
const burger = document.querySelector('.header__btn');
const body = document.getElementById('body');
const nav = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.intro__btn');

burger.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');
});