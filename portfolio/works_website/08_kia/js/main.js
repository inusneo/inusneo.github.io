'use strict'

/* Gnb Scroll Up & Down Effects */

const header = document.querySelector('#header');
const gnbMenu = document.querySelectorAll('.gnb a');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  //console.log('scroll', scroll);
  if (currentScroll <= 0) {
    header.classList.remove('on');
  } 
  if (currentScroll > lastScroll) { 
    header.classList.add('on');
  }  
});

/* Hamburger Menu */

const btnOpen = document.querySelector('.btn--open');
const btnClose = document.querySelector('.btn--close');
const gnbDrawer = document.querySelector('#gnb');

btnOpen.addEventListener('click', (e) => {
  gnbDrawer.classList.add('on');
});
btnClose.addEventListener('click', (e) => {
  gnbDrawer.classList.remove('on');
});

/* Site all Menu */

const btnSite = document.querySelectorAll('.site-all__menu');

btnSite.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('on');
  })
});

/* Family Site Menu  */

const btnFamily = document.querySelector('.footer__family--btn');
const familyList = document.querySelector('.footer__family');

btnFamily.addEventListener('click', (e) => {
  e.preventDefault();
  familyList.classList.toggle('on');
});