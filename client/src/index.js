import Slider from './lib/Slider'

class App {
  constructor() {
    this.$ticketsOverlay = document.getElementById('tickets-overlay')
    this.$hackathonOverlay = document.getElementById('hackathon-overlay')
    this.$ticketsOverlayClose = this.$ticketsOverlay.getElementsByClassName('close')[0]
    this.$hackathonOverlayClose = this.$hackathonOverlay.getElementsByClassName('close')[0]
    this.$ticketsOverlayTriggers = Array.from(document.querySelectorAll('[data-overlay="tickets"]'))
    this.$hackathonOverlayTriggers = Array.from(document.querySelectorAll('[data-overlay="hackathon"]'))

    this.$ticketsOverlayTriggers.forEach($trigger => {
      $trigger.addEventListener('click', () => {
        this.$ticketsOverlay.classList.add('active')
      })
    })

    this.$hackathonOverlayTriggers.forEach($trigger => {
      $trigger.addEventListener('click', () => {
        this.$hackathonOverlay.classList.add('active')
      })
    })

    this.$ticketsOverlayClose.addEventListener('click', () => {
      this.$ticketsOverlay.classList.remove('active')
    })

    this.$hackathonOverlayClose.addEventListener('click', () => {
      this.$hackathonOverlay.classList.remove('active')
    })

    const $sliders = Array.prototype.slice.call(document.getElementsByClassName('images'))

    $sliders.forEach($slider => {
      const gallery = new Slider({
        $container: $slider,    // DOMElement that is the parent container for your slides
        childSelector: 'img',  // A CSS selector to grab your slides
        shouldAutoplay: true,     // Toggle autoplay (obvi)
        slideSpeed: 3000,         // Duration between each slide change (in milliseconds)
      })
    })
  }
}

new App()