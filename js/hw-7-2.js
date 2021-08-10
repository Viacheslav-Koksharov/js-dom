const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const list = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
    const listEl = document.createElement('li')
    listEl.textContent = ingredient
    return listEl
})

list.append(...element)

