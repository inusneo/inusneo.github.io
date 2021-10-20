'use strict'

/* 🍦 gallery click event in vanilla JS 🍦 */

const changeImgs = document.querySelector('#galleryCars');
const colorChips = document.querySelectorAll('.galleryChip'); 

colorChips.forEach((item) => {
  item.addEventListener('click', click);
});

function click(item) {
  let chipAttribute = this.getAttribute('data-src');
  changeImgs.setAttribute('src', chipAttribute);
}

/* 🖱️ Scroll Top Btn display */
const btnScrollBox = document.querySelector('#btnScrollBox');
window.addEventListener('scroll', () => {
  if (document.querySelector('html').scrollTop > 100) {
    btnScrollBox.style.display = 'block';
  } else {
    btnScrollBox.style.display = 'none';
  }
});

/* 🖱️ Scroll Top effect */
const btnScrollTop = document.querySelector('#btnScrollTop');
btnScrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});