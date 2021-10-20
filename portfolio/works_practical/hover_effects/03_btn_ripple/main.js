/* Mousemove effects */

const btn = document.querySelectorAll('.btn');

btn.forEach(btns => {
  btns.onmousemove = function (e) {
    const x = e.pageX - btns.offsetLeft;
    const y = e.pageY - btns.offsetTop;
  
    btns.style.setProperty('--x', x + 'px');
    btns.style.setProperty('--y', y + 'px');
  }
});

/*
btn.onmousemove = function (e) {
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}
*/