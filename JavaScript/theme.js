let page = document.querySelector('.page')
let themeButton = document.querySelector('.right__theme');

themeButton.onclick = function() {
    page.classList.toggle('dark–theme');
}
