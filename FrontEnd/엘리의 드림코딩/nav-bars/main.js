const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active'); // menu의 classlist 중 active를 toggling함. => menu를 click했을 때 class에 active가 없다면 추가하고 있다면 빼주는 기능. 자바스크립트에서 toggle은 on/off의 개념
  icons.classList.toggle('active'); // icons의 classlist 중 active를 toggling함. => icons를 click했을 때 class에 active가 없다면 추가하고 있다면 빼주는 기능.
}); // toggleBtn에 이벤트를 추가, 클릭을 할때마다 {} 함수를 실행.