const refs = {
    input: document.querySelector('#name-input'),
    user: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {

    refs.user.textContent = event.currentTarget.value;

    if (refs.input.value === '') {
        refs.user.innerHTML = 'незнакомец';
    }
};



