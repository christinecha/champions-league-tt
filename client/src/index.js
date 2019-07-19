class App {
  constructor() {
    this.$overlay = document.getElementById('overlay')
    this.$closeOverlay = this.$overlay.getElementsByClassName('close')[0]
    this.$overlayTriggers = Array.from(document.getElementsByClassName('overlay-trigger'))

    this.$overlayTriggers.forEach($trigger => {
      $trigger.addEventListener('click', () => {
        this.$overlay.classList.add('active')
      })
    })

    this.$closeOverlay.addEventListener('click', () => {
      this.$overlay.classList.remove('active')
    })
  }
}

new App()