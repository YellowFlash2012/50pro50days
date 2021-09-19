const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const today = new Date();
console.log(today.getMonth(), today.getFullYear());

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="assets/azamat-zhanisov-nAcDZOnlps4-unsplash.jpg" alt="">';

    title.innerHTML = 'Lorem ipsum dolor sit amet.';

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reprehenderit.';

    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';

    name.innerHTML = 'John Doe';

    date.innerText = new Date().getFullYear();

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}