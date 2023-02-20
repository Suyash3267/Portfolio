document.querySelector('.Punching-and-Blanking-Press-Machine').addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector('.aboutProject').textContent = 'Aiming to design and develop a punching and blanking machine with help of effective CAM mechanism using different materials for long life';
  document.querySelectorAll('.projectName div').forEach(function (div) {
    div.style.background = 'transparent';
  });
  document.querySelector('.Punching-and-Blanking-Press-Machine').style.backgroundColor = 'purple';
});

document.querySelector('.Adaptive-Headlights').addEventListener('click', function (e) {
  // e.preventDefault();
  document.querySelector('.aboutProject').textContent = 'Design And Development of steering with movable headlights';
  document.querySelectorAll('.projectName div').forEach(function (div) {
    div.style.background = 'transparent';
  });
  document.querySelector('.Adaptive-Headlights').style.backgroundColor = 'purple';
});

document.querySelector('.Portfolio-site').addEventListener('click', function (e) {
  // e.preventDefault();
  document.querySelector('.aboutProject').textContent = 'This is My Responsive Portfolio site where i showcased my programming skills';
  document.querySelectorAll('.projectName div').forEach(function (div) {
    div.style.background = 'transparent';
  });
  document.querySelector('.Portfolio-site').style.backgroundColor = 'purple';
});
