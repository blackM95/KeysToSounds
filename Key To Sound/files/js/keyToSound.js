var hide = document.querySelector('.button');
var bring = document.querySelector('#but2');
hide.addEventListener('click', function () {
  this.parentNode.style.display = 'none';
  bring.style.display = 'inline-block';
});

bring.addEventListener('click', function () {

  this.style.display = 'none';
  hide.parentNode.style.display = 'inline-block';
});
