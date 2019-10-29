import Slider from './lib/Slider'

class App {
  constructor() {
    const $sliders = Array.prototype.slice.call(document.getElementsByClassName('images'))
    const $players = Array.prototype.slice.call(document.getElementsByClassName('player'))

    $sliders.forEach($slider => {
      new Slider({
        $container: $slider,    // DOMElement that is the parent container for your slides
        childSelector: 'img',  // A CSS selector to grab your slides
        shouldAutoplay: true,     // Toggle autoplay (obvi)
        slideSpeed: 3000,         // Duration between each slide change (in milliseconds)
      })
    })

    if ($players) {
      const $parent = $players[0].parentNode

      const $newOrder = document.createDocumentFragment()

      $players
      .sort(() => Math.random() < 0.5 ? -1 : 1)
      .forEach($player => {
        $newOrder.appendChild($player)
      })

      $parent.innerHTML = ''
      $parent.appendChild($newOrder)

      $parent.classList.add('is-loaded')
    }
  }
}

new App()