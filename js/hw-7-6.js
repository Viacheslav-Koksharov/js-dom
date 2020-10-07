const refs = {
    input: document.querySelector('#validation-input')
};

refs.input.addEventListener('blur', onInputChange);
refs.input.addEventListener('focus', onInputFocus);

function onInputChange() {

    if (refs.input.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid')
        refs.input.classList.remove('invalid')
    } else { refs.input.classList.add('invalid') }
};
