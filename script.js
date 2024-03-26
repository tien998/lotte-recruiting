'use strict'

function toggle() {
    const toggle = document.querySelector('.toggle');
    const target = document.querySelector(toggle.dataset.cusTarget);
    const overlay = document.querySelector('.overlay');
    toggleEvent();

    // const childs = target.children;
    // for (let e of childs) {
    //     e.addEventListener('click', (e) => {
    //         toggleEvent();
    //     });
    // }

    function toggleEvent() {
        target.classList.toggle('d-none');
        target.classList.toggle('h-0');
        target.classList.toggle('h-auto');
        // overlay.classList.toggle('d-none');
    }
    // document.querySelector('.overlay').addEventListener('click', () => {
    //     toggleEvent();
    // })
}