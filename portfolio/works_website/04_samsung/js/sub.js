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