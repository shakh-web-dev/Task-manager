//Модальное окно
let modal = document.querySelector('.modal-window')
let modalDelete = document.querySelector('.modal-delete')
let bg_modal = document.querySelector('.modal-background')
let openBtn = document.querySelector('.button-add')
let closeBtn = document.querySelector('.modal-background span')
let addBtn = document.querySelector('.add')
let input = document.querySelector('form input')
let textarea = document.querySelector('form textarea')
let body = document.querySelector('body')
export { modalDelete, body, bg_modal, noActive }

function Active() {
    modal.classList.add('show')
    bg_modal.style.display = "block"
    setTimeout(() => {
        bg_modal.style.transition = "none"
    }, 500)
    body.style.overflow = "hidden"
    setTimeout(() => {
        bg_modal.style.opacity = "1"
    }, 100);
}


function noActive() {
    modal.classList.remove('show')
    bg_modal.style.opacity = "0"
    setTimeout(() => {
        bg_modal.style.display = "none"
    }, 500);
    body.style.overflowY = "scroll"
}


openBtn.onclick = () => Active()

closeBtn.onclick = () => noActive()

bg_modal.onclick = () => noActive()

addBtn.onclick = () => {
    if (input.value && textarea.value) noActive()
    else (input && textarea).style.boxShadow = '0px 0px 2.5px 2.5px red'
}


input.onkeyup = () => {
    if (input.value) input.style.boxShadow = '0px 0px 2.5px 2.5px green'
    else input.style.boxShadow = '0px 0px 2.5px 2.5px red'
}

textarea.onkeyup = () => {
    if (textarea.value) textarea.style.boxShadow = '0px 0px 2.5px 2.5px green'
    else textarea.style.boxShadow = '0px 0px 2.5px 2.5px red'
}