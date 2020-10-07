const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');

const makeListOfIngredients = (ingredients) => {
    return ingredients.map(ingredient => {
        const listItem = document.createElement('li')
        listItem.textContent = ingredient;
        return listItem
    })
};

const recept = makeListOfIngredients(ingredients);

listEl.append(...recept);