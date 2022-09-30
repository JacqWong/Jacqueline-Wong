const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    icon.classList.toggle('fa-xmark')
    icon.classList.toggle('fa-bars')
})