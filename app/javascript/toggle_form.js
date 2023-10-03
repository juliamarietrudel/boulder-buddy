document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('toggle-form-link');
  const form = document.querySelector('.hidden-form');
  const input_field = document.querySelector('.input-field')

  if (link && form) {
    link.addEventListener('click', function(e) {
      console.log('a')
      e.preventDefault();
      if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        input_field.focus();
      } else {
        form.style.display = 'none';
      }
    });
  }

document.querySelectorAll('.hover-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.classList.remove('far');
    this.classList.add('fas');
  });

  icon.addEventListener('mouseleave', function() {
    this.classList.remove('fas');
    this.classList.add('far');
  });

  icon.addEventListener('click', function() {
    let index = parseInt(this.dataset.index);
    document.querySelectorAll('.hover-icon').forEach(otherIcon => {
      let otherIndex = parseInt(otherIcon.dataset.index);
      if (otherIndex <= index) {
        otherIcon.classList.add('fas', 'selected');
        otherIcon.classList.remove('far');
      } else {
        otherIcon.classList.add('far');
        otherIcon.classList.remove('fas', 'selected');
      }
    });
  });
});

});
