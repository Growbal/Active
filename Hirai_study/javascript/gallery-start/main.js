var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

function changeImage(e) {
  var mainImage = document.querySelector('.full-img img');
  var path = e.target.getAttribute('src');
  mainImage.setAttribute('src', path)
}

for (var i = 0; i < 5; i++) {
  var newImage = document.createElement('img');
  var num = i + 1;
  newImage.setAttribute('src', './images/pic' + (i + 1) + '.jpg');
  var child = thumbBar.appendChild(newImage);
  child.addEventListener('click', changeImage);
}

btn.addEventListener('click', function (e) {
  if (e.target.getAttribute('class') === 'dark') {
    e.target.setAttribute('class', 'light');
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    e.target.setAttribute('class', 'dark');
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})

/* Wiring up the Darken/Lighten button */

