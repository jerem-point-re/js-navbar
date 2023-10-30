// Counter

const counter = document.getElementById('sum');

const incr = document.getElementById('incr-btn');
const decr = document.getElementById('decr-btn');

const save = document.getElementById('save-btn');
const refr = document.getElementById('refr-btn');

const savedCount = document.getElementById('saved-count');

let sum = 0;

function decrement() {
    sum--;
    counter.innerText = sum;
}

decr.addEventListener('click', decrement);

function increment() {
    sum++;
    counter.innerText = sum;
}

incr.addEventListener('click', increment);

function saveCount() {
    savedCount.textContent += sum + ' | ';
    sum = 0;
    counter.innerText = sum;
}

save.addEventListener('click', saveCount);

function refrCount() {
    savedCount.innerText = 0;
}

refr.addEventListener('click', refrCount);

// Mousemove

const circles = document.querySelectorAll('.circle');

window.addEventListener('mousemove', (e) => {
    circles.forEach((c) => {
        c.style.top = e.y + "px";
        c.style.left = e.x + "px";
    });
});

// Navbar

let scrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const ratio = scrollPos - window.scrollY;

    if (ratio < 0) nav.style.opacity = 0;
    else nav.style.opacity = 1;

    scrollPos = window.scrollY;
});