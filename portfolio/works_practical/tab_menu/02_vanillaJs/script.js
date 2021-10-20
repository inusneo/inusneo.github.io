'use strict'
/* Tabs in 🍦Vanilla JS */
const tabItems = document.querySelectorAll('.tab-menu'); // li
//console.log(tabItems);
const tabContents = document.querySelectorAll('.tab-content'); // ul
//console.log(tabContents);

tabItems.forEach((item) => {
  item.addEventListener('click', click);
});

function click(item) {
  const tabTarget = item.currentTarget;
  console.log(tabTarget);
  const target = tabTarget.dataset.tab; // data-tab의 속성
  console.log(target);

  // 각 li(tab-menu)의 active 삭제
  tabItems.forEach((title) => {
    title.classList.remove('active');
  });
  // 각 ul(tab-content)의 target 삭제
  tabContents.forEach((target) => {
    target.classList.remove('target');
  });
  // #tab1~4에 target class를 추가하고
  // data-tab 속성이 있는 요소에 active class를 추가한다.
  document.querySelector(`#${target}`).classList.add('target');
  // console.log(`#${target}`);
  tabTarget.classList.add('active');
}