const refs = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text")
}

refs.input.addEventListener('input', onMove);

function onMove(event) {
    refs.span.style.fontSize = refs.input.value + 'px'
    console.log(event.currentTarget.value)
}
