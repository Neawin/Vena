const selectElement = (e) => {
  return document.querySelector(e)
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
})