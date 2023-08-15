import { countriesList, totalCountries } from './element.js'
import countries from '../data/countries.js'

export function displayCountries (filteredCountries) {
  countriesList.innerHTML = ''
  totalCountries.textContent = `Total Number Of Countries: ${countries.length}`
  const countriesToDisplay = filteredCountries || countries

  // iterate through countries data
  countriesToDisplay.forEach((country) => {
    const span = document.createElement('span')
    span.classList.add('country')
    span.textContent = country
    countriesList.appendChild(span)
  })
}
