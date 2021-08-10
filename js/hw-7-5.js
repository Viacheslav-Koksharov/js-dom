const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(e) {
    refs.span.textContent = e.currentTarget.value
    if (refs.input.value === '') {
        refs.span.innerHTML = 'незнакомец';
    }
}



