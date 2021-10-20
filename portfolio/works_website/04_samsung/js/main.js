'use strict'

/* 🍦 Vanilla JS 🍦 */
 
window.onload = function() {
  
  /* ⌨ Gnb Hover Dropdown Effect */
  const gnbMenu = document.querySelectorAll('.gnb_list > li');
  const headerWrap = document.querySelector('.header_wrap');
  
  for (let i = 0; i < gnbMenu.length; i++) {
    gnbMenu[i].addEventListener('mouseover', function() {
      this.className += 'on';
      let divHeight = this.children[1].offsetHeight;
      headerWrap.style.height = 70 + divHeight + 'px';
      //console.log(headerWrap);
    });
    gnbMenu[i].addEventListener('mouseout', function() {
      this.classList.remove('on');
      headerWrap.style.height = '70px';
    });
  }
  
  /* Search Wrap Effect */
  
  const srchBtn = document.querySelector('.btn_srch');
  const srchCloseBtn = document.querySelector('.btn_srch_close');
  const srchWrap = document.querySelector('.srch_wrap');
  
  srchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    srchWrap.className += ' on';
    this.className += ' on';
  });
  
  srchCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    srchWrap.classList.remove('on');
    srchBtn.classList.remove('on');
  });
  /* Main_visual Slide Effect */

  const btnNext = document.querySelector('.btn_next');
  const btnPrev = document.querySelector('.btn_prev');
  const slide = document.querySelectorAll('.slide');
  const slideRoll = document.querySelectorAll('.slide_roll li');
  
  let bnrNum = 0;
  let lastNum = document.querySelectorAll('.slide_wrap > li').length - 1;
  
  btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    bnrNum++;
    if (bnrNum > lastNum) {
      bnrNum = 0;
    }
    slide.forEach((item) => {
      item.classList.remove('active');
    });
    slide[bnrNum].classList.add('active');
  
    slideRoll.forEach((idx) => {
      idx.classList.remove('active');
    });
    slideRoll[bnrNum].classList.add('active');
  });
  
  btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    bnrNum--;
    if (bnrNum < 0) {
      bnrNum = lastNum;
    }
    slide.forEach((item) => {
      item.classList.remove('active');
    });
    slide[bnrNum].classList.add('active');
  
    slideRoll.forEach((idx) => {
      idx.classList.remove('active');
    });
    slideRoll[bnrNum].classList.add('active');
  });
  
  /* Auto rolling */
  function autoBanner() {
    bnrNum++;
    if (bnrNum > lastNum) {
      bnrNum = 0;
    }
    slide.forEach((item) => {
      item.classList.remove('active');
    });
    slide[bnrNum].classList.add('active');
  
    slideRoll.forEach((idx) => {
      idx.classList.remove('active');
    });
    slideRoll[bnrNum].classList.add('active');
  };
  
  let autoSlide = setInterval(autoBanner , 5000);
  
  /* Play, Pause  */
  const btnPlay = document.querySelector('.btn_play');
  
  let flag = true;
  
  btnPlay.addEventListener('click', (e) => {
    e.preventDefault();
    if (flag) {
      clearInterval(autoSlide);
      btnPlay.classList.add('pause');
      flag = false;
    } else {
      autoSlide = setInterval(autoBanner , 5000);
      btnPlay.classList.remove('pause');
      flag = true;
    }
  });
  
  /* Rolling Navigation */
  const btnRoll = document.querySelectorAll('.slide_roll li');
  
  let curRoll; // click element
  let parentRoll; 
  let childRoll;
  let curIdx; // click index
  
  btnRoll.forEach((item) => {
    item.addEventListener('click', rollIdx);
  });
  
  function rollIdx(items) {
    items.preventDefault();
    curRoll = items.currentTarget;
    parentRoll = curRoll.parentElement;
    childRoll = parentRoll.children;
    curIdx = Array.from(childRoll).indexOf(curRoll);
  
    slide.forEach((item) => {
      item.classList.remove('active');
    });
    slide[curIdx].classList.add('active');
  
    slideRoll.forEach((idx) => {
      idx.classList.remove('active');
    });
    slideRoll[curIdx].classList.add('active');
    // click idx => curIdx
    bnrNum = curIdx;
  } 

  /* 🖱️ Scroll Top Btn display */
  
  const btnScrollBox = document.querySelector('#btnScrollBox');
  
  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 120) {
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
};