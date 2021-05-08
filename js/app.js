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
const burger = document.querySelector('.header__btn'),
      body = document.getElementById('body'),
      nav = document.querySelector('.header__nav'),
      closeBtn = document.querySelector('.intro__btn');

burger.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');
});

const closeLink = document.querySelectorAll('.header__nav');

closeLink.forEach(el => el.addEventListener('click', () => {
    burger.classList.remove('active');
    body.classList.remove('active');
    nav.classList.remove('active');
}));

// MODAL
const modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.modal__close'),
      watch = document.getElementById('watch'),
      video = document.getElementById('video'),
      moreInfo = document.getElementById('moreInfo'),
      moreInfoOpen = document.getElementById('moreInfoOpen'),
      moreInfoClose = document.getElementById('moreInfoClose');

        watch.addEventListener('click', () => {
            modal.classList.add('active');
            body.classList.add('active');
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            body.classList.remove('active');
            video.pause();
        });

        moreInfoOpen.addEventListener('click', () => {
            moreInfo.classList.add('active');
            body.classList.add('active');
        });

        moreInfoClose.addEventListener('click', () => {
            moreInfo.classList.remove('active');
        });

// HEADER

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    header.style.top = value * 0.7 + 'px';
});

window.onscroll = () => {
    if(window.pageYOffset > 400) {
        header.classList.add('active');
        header.style.top = 0 + 'px';
    }
    else {
        header.classList.remove('active');
    }
};
