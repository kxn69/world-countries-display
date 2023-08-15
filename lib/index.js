import { countriesList, totalCountries, header } from './element.js'
import countries from '../data/countries.js'

export function displayCountries (filteredCountries) {
  countriesList.innerHTML = ''
  header.style.backgroundImage = 'url(images/globe.jpg)'
  totalCountries.textContent = `Total Number Of Countries: ${countries.length}`
  const countriesToDisplay = filteredCountries || countries

  // iterate through countries data
  countriesToDisplay.forEach((country) => {
    const span = document.createElement('span')
    span.classList.add('country')
    span.style.backgroundImage = 'url(images/map.jpg)'
    span.textContent = country
    countriesList.appendChild(span)
  })
}
