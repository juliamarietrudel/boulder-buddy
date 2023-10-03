// document.addEventListener('DOMContentLoaded', function () {
//   const stars = document.querySelectorAll('.star .star-rating');
//   const ratingField = document.querySelectorAll('#rating-field');

//   stars.forEach(star => {
//     star.addEventListener('click', function () {
//       const index = star.dataset.index
//       ratingField.value = index
//       star.classList.add('s')
//     })
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star')
  const ratingField = document.querySelector('#rating-field')
  stars.forEach((star, index) => {
    star.addEventListener('click', function (e) {
      ratingField.value = index
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('select-star')
        } else {
          s.classList.remove('select-star')
        }
      })
    })
  })
})
