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

const circleA = document.querySelector('.circle-a');
const circleB = document.querySelector('.circle-b');
const circleC = document.querySelector('.circle-c');

window.addEventListener('mousemove', (e) => {
    circleA.style.top = e.pageY + 'px';
    circleA.style.left = e.pageX + 'px';
    circleB.style.top = e.pageY + 'px';
    circleB.style.left = e.pageX + 'px';
    circleC.style.top = e.pageY + 'px';
    circleC.style.left = e.pageX + 'px';
});

// Navbar

let scrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const ratio = scrollPos - window.scrollY;
    
    if (ratio < 0) nav.style.opacity = 0;
    else nav.style.opacity = 1;

    scrollPos = window.scrollY;
});