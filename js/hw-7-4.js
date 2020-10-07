const counterEl = document.querySelector('#counter');

const refs = {
    subBtn: document.querySelector('[data-action="decrement"]'),
    addBtn: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
};
refs.subBtn.addEventListener('click', decrement);
refs.addBtn.addEventListener('click', increment);

let counterValue = 0;

function decrement() {
    counterValue -= 1;
    refs.span.textContent = counterValue
};

function increment() {
    counterValue += 1;
    refs.span.textContent = counterValue
};

