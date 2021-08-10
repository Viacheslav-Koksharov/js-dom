const itemEl = document.querySelectorAll('.item');

const totalCategories = (categories) => {
    console.log(`В списке ${categories.length} категории.`)
};
totalCategories(itemEl);

const listEl = (categories) => {
    categories.forEach(category => (console.log(`Категория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.children.length}`)))
};
listEl(itemEl);