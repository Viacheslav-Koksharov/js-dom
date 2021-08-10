const refs = {
    input: document.querySelector('input'),
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    box: document.querySelector('.box')
}

refs.render.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const baseSize = 20
    const array = [];
    amount = Number(refs.input.value)

    for (let i = 1; i <= amount; i += 1) {
        const box = document.createElement('div')
        const size = baseSize + i * 10 + 'px'
        box.classList.add('box')
        box.style.width = `${size}`
        box.style.height = `${size}`
        box.style.background = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        array.push(box)
        refs.boxes.append(...array)
    }
}

function destroyBoxes() {
    refs.boxes.innerHTML = "";
    refs.input.value = "";
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}