document.addEventListener("DOMContentLoaded", function() {
  // const markers = JSON.parse(document.querySelector('[data-map-markers-value]').getAttribute('data-map-markers-value'));
  const map = document.querySelector('#map-container')
  map.on('load', function() {
    markers.forEach((markerData, index) => {
      // Create a new marker
      const el = document.createElement('div');
      el.className = 'marker-class'; // Your marker class here
      el.id = `marker-${index}`; // Assign an ID to the marker

      // Add your marker to the map
      new mapboxgl.Marker(el)
        .setLngLat([markerData.lng, markerData.lat])
        .addTo(map);

      // Add event listeners
      el.addEventListener('mouseenter', function() {
        console.log(`Mouse entered marker with ID: marker-${index}`);
      });

      el.addEventListener('mouseleave', function() {
        console.log(`Mouse left marker with ID: marker-${index}`);
      });
    });
    // const markersAttr = document.querySelector('[data-map-markers-value]').getAttribute('data-map-markers-value');

    // const markers = JSON.parse(markersAttr);

    // markers.forEach((markerData, index) => {
    //   const markerId = `marker-${index}`
    //   const markerElement = document.getElementById(markerId)
    //   console.log('Looking for element with id:', markerId)
    //     console.log('Element found:', markerElement)
    // })
  })
})
