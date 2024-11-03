const paying = document.getElementById('#allSum');
const a = document.createElement('div');
const textform=document.querySelector('#textform');
paying.append(textform);
paying.innerHTML += sessionStorage.getItem('allSum');
