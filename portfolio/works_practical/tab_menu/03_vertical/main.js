const menu = document.querySelectorAll('li');
const tabs = document.querySelectorAll('.tab-content > div');

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('li.active').classList.remove('active');
    this.classList.add('active');
    document.querySelector('.tab-content > div.active').classList.remove('active');
    tabs[i].classList.add('active');
  });
}