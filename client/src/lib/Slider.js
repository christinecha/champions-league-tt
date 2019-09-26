import Hammer from 'hammerjs'

class Slider {
  constructor(opts) {
    this.$container = opts.$container
    this.childSelector = opts.childSelector

    this.$images = Array.prototype.slice.call(this.$container.querySelectorAll('img'))
    
    const loadPromises = this.$images.map($img => {
      return new Promise(resolve => {
        $img.addEventListener('load', resolve)
      })
    })

    // create a manager for that element
    this.hammer = new Hammer.Manager(this.$container)
    this.hammer.add( new Hammer.Swipe({  direction: Hammer.DIRECTION_HORIZONTAL }) );
    
    // subscribe to events
    this.hammer.on('swipeleft', e => {
      this.next()
    });

    // this.hammer.on('swiperight', e => {
    //   this.prev()
    // });
  }

  next() {
    this.$slides = Array.prototype.slice.call(this.$container.querySelectorAll(this.childSelector))

    if (this.$slides.length < 3) {
      return
    }
    
    // copy first to end.
    const $slide = this.$slides[0]
    const $copy = $slide.cloneNode(true)
    this.$container.appendChild($copy)
    const width = $slide.clientWidth

    // move container.
    this.$container.style.transition = `transform 300ms ease-in-out`
    this.$container.style.transform = `translate3d(-${width}px, 0, 0)`

    // after move, pop off past slide + reset transform
    const handleTransition = (e) => {
      if (e.target !== this.$container) return
      this.$container.removeChild($slide)
      this.$container.style.transition = 'none'
      this.$container.style.transform = ''
      this.$container.removeEventListener('transitionend', handleTransition)
    }

    this.$container.addEventListener('transitionend', handleTransition)
  }

  prev() {
    this.$slides = Array.prototype.slice.call(this.$container.querySelectorAll(this.childSelector))

    // copy last to front and set transform to offset
    const $slide = this.$slides[this.$slides.length - 1]
    const $copy = $slide.cloneNode(true)
    this.$container.removeChild($slide)
    const width = $slide.clientWidth
    this.$container.style.transform = `translate3d(-${width}px, 0, 0)`
    this.$container.insertBefore($copy, this.$slides[0])

    // force re-flow
    this.$container.clientWidth
    this.$container.style.transition = `transform 300ms ease-in-out`

    // reset transform
    this.$container.style.transform = ``

    // remove transition after
    const handleTransition = (e) => {
      if (e.target !== this.$container) return
      this.$container.style.transition = 'none'
      this.$container.removeEventListener('transitionend', handleTransition)
    }

    this.$container.addEventListener('transitionend', handleTransition)
  }
}

export default Slider