'use strict'

/* Loading Page */

const loadingPage = document.querySelector('#loader');
const mBody = document.querySelector('body');

setTimeout( ()=>{
  mBody.classList.remove('on');
  loadingPage.parentElement.removeChild(loadingPage);
}, 2000);

/* Gnb Scroll Up & Down Effects */

const header = document.querySelector('#header');
const sections = document.querySelectorAll('section');
const gnbMenu = document.querySelectorAll('.gnb a');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  //console.log('scroll', scroll);
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
  } 
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) { 
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  }  
  if (currentScroll < lastScroll && header.classList.contains('scroll-down')) { 
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  } 

  lastScroll = currentScroll;

  let cur = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHt = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      cur = section.getAttribute('id');
    }
  });

  gnbMenu.forEach( list => {
    list.classList.remove('active');

    if (list.classList.contains(cur)) {
      list.classList.add('active');
    }
  });
});

/* Hamburger Menu */

const hamburg = document.querySelector('.btn-menu');
const dim = document.querySelector('.dim');
const gnbDrawer = document.querySelector('#gnb');

hamburg.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('on');
  gnbDrawer.classList.toggle('active');
  mBody.classList.toggle('on');
  dim.classList.toggle('on');
});

/* Drawer Menu Click Function */

const drawerMenu = document.querySelectorAll('.gnb__wrap a');

drawerMenu.forEach(menu => {
  menu.addEventListener('click', () => {
    hamburg.classList.remove('on');
    gnbDrawer.classList.remove('active');
    mBody.classList.remove('on');
    dim.classList.remove('on');
  });
});

/* 🖱️ Scroll Top Btn display */

const btnScrollBox = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
  if (document.querySelector('html').scrollTop > 150) {
    btnScrollBox.style.display = 'block';
  } else {
    btnScrollBox.style.display = 'none';
  }
});

/* 🖱️ Scroll Top effect */

const btnScrollTop = document.querySelector('#btnScrTop');

btnScrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});