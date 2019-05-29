function render () {
  const isAvailablePassport = $option => {
    const { countryCode } = $option.dataset
    return this.AVAILABLE_PASSPORTS.indexOf(countryCode) > -1
  }

  const isAvailableDestination = $option => {
    if (!this.state.passport) return false
    const requirements = this.REQUIREMENTS_CACHE[this.state.passport]
    const { countryCode } = $option.dataset
    return requirements[countryCode]
  }

  const isTypeaheadMatch = $option => {
    const { country } = $option.dataset
    return country.indexOf(this.state.typeaheadValue) === 0
  }

  if (this.state.view === 'PASSPORT') {
    this.refs.options.forEach(($option) => {
      const isActive = isAvailablePassport($option) && isTypeaheadMatch($option)
      $option.dataset.isActive = isActive
    })
  }

  if (this.state.view === 'DESTINATION') {
    const passportCountry = this.COUNTRIES_BY_CODE[this.state.passport] || {}
    if (passportCountry.colors) {
      const color = passportCountry.colors[0]
      this.refs.passportColor.style.background = color
    }

    this.refs.options.forEach(($option) => {
      const isActive = isAvailableDestination($option) && isTypeaheadMatch($option)
      $option.dataset.isActive = isActive
    })
  }

  if (this.state.view === 'REQUIREMENTS') {
    const destinationCountry = this.COUNTRIES_BY_CODE[this.state.destination] || {}
    if (destinationCountry.colors) {
      const color = destinationCountry.colors[0]
      this.refs.destinationColor.style.background = color
    }
  }

  this.refs.main.dataset.view = this.state.view
}

export default render