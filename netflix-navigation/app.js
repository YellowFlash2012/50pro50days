openBtn = document.querySelector('.open-btn');
closeBtn = document.querySelector('.close-btn');
navs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('visible'));
})

closeBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('visible'));
})