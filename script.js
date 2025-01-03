var checkbox = document.querySelectorAll(".checkbox");

for (i=0;i<checkbox.length;i++){
checkbox[i].addEventListener('change', function() {
  if (this.checked) {
    this.nextSibling.nextElementSibling.style.display = 'flex';
  } else {
    this.nextSibling.nextElementSibling.style.display = 'none';
  }
});}