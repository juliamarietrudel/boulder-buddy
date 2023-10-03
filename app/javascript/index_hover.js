document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.list-items')
  listItems.forEach(function(listItem) {
    listItem.addEventListener('mouseover', function () {
      const marker = listItem.dataset.markerId;
      listItem.classList.add('red')
      const markerElement = document.getElementById(marker)
      markerElement.classList.add('background-color-red');
      console.log(markerElement)
    })
    listItem.addEventListener('mouseout', function () {
      listItem.classList.remove('red');
      const marker = listItem.dataset.markerId;
      const markerElement = document.getElementById(marker)
      markerElement.classList.remove('background-color-red')
    })
  })
})
