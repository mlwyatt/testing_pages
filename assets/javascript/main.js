document.addEventListener('DOMContentLoaded', function() {
  const navButton = document.querySelector('.navbar-burger');
  const nav = document.querySelector('.navbar-menu');

  if ( navButton === null ) {
    return;
  }

  if ( nav === null ) {
    return;
  }

  navButton.addEventListener('click', function() {
    navButton.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
});
