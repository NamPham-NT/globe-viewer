import Vue from 'vue'
import registerRangeSlider from 'components/rangeSlider'
import registerRangeStepper from 'components/rangeStepper'

export default class Controls {
  constructor(scene, camera) {
    var propertyMap = {
      'latitude': camera.latitude,
      'longitude': camera.longitude,
      'zoom': camera.zoom,
      'time': scene.time,
      'season': scene.season
    }

    registerRangeSlider(propertyMap)
    registerRangeStepper(propertyMap)

    this.vue = new Vue({ el: '.map-container' })
    window.vue = this.vue
  }
}