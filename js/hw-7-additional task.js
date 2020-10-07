const refs = {
    input: document.querySelector('input'),
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
}
console.log(refs);

refs.render.addEventListener('click', GetAmount);
refs.destroy.addEventListener('click', DestroyBoxes);

function GetAmount() {
    const amount = refs.input.value;
    CreateBoxes(amount)
}

function CreateBoxes(amount) {
    const boxEl = document.createElement('div');
    boxEl.length = amount;
}

function DestroyBoxes() {
    refs.boxes.innerHTML = "";
}

