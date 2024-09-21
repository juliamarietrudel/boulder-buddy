document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector("#search-icon");
  const searchFormContainer = document.querySelector(".search-form-container");
  const searchInput = document.querySelector("#search-input");
  const hiddenButton = document.querySelector('.hidden-button')
  const searchForm = document.querySelector('#search-form')

  searchIcon.addEventListener("click", function() {
    searchIcon.style.display = "none";
    searchFormContainer.classList.remove('hidden')
    searchInput.focus();
    hiddenButton.classList.remove('hidden');
  });

  searchForm.addEventListener('submit', function() {
    searchIcon.style.display = "block";
    hiddenButton.classList.add('hidden');
    searchFormContainer.classList.add('hidden');
  })
})
