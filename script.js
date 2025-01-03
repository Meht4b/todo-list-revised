var checkbox = document.querySelector(".checkbox");


checkbox.addEventListener('change', function() {
  if (this.checked) {
    this.nextSibling.nextElementSibling.style.display = 'flex';
  } else {
    this.nextSibling.nextElementSibling.style.display = 'none';
  }
});