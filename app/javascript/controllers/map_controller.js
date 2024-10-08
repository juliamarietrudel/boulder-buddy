// app/javascript/controllers/map_controller.js
import { Controller } from "@hotwired/stimulus"
import mapboxgl from 'mapbox-gl' // Don't forget this!

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {

    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/light-v11"
    })
    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }
  #addMarkersToMap() {
    this.markersValue.forEach((marker, index) => {
      const el = document.createElement('div');
      el.className = 'custom-marker-class';
      el.id = `marker-${index}`
      const parent = document.querySelector('.show-container')
      console.log(parent)
        if (parent && parent.classList.contains('show-container')) {
        el.classList.add('background-color-red');
      }
      new mapboxgl.Marker(el)
      .setLngLat([ marker.lng, marker.lat ])
      .addTo(this.map)
    })

  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
  }

}

console.log('testing')
