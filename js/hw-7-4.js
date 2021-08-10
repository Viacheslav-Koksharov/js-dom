const incBtn = document.querySelector('#counter button[data-action="increment"]')
const decBtn = document.querySelector('#counter button[data-action="decrement"]')
const span = document.querySelector('#value')

const onIncBtnClick = incBtn.addEventListener('click', increment)
const onDecBtnClick = decBtn.addEventListener('click', decrement)

let counterValue = 0;

function increment() {
    counterValue += 1
    span.textContent = counterValue
}

function decrement() {
    counterValue -= 1
    span.textContent = counterValue
}