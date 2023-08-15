import countries from '../data/countries.js'
import { startingWordBtn, anyWordBtn, arrowBtn, searchBar } from './element.js'
import { searchThroughAnyLetter, searchThroughStartingLetter, filteredCountries, customSort } from './utilities.js'
import { displayCountries } from './index.js'

let activeButton = null
let isDescending = false

export function handleStartingWordBtn () {
  if (activeButton === startingWordBtn) {
    startingWordBtn.classList.remove('active')
    activeButton.style.backgroundColor = ''
    activeButton = null
  } else {
    if (activeButton) {
      activeButton.classList.remove('active')
      activeButton.style.backgroundColor = ''
    }
    startingWordBtn.classList.add('active')
    activeButton = startingWordBtn
    activeButton.style.backgroundColor = '#3d105f'
  }
}

export function handleAnyWordBtn () {
  if (activeButton === anyWordBtn) {
    anyWordBtn.classList.remove('active')
    activeButton.style.backgroundColor = ''
    activeButton = null
  } else {
    if (activeButton) {
      activeButton.classList.remove('active')
      activeButton.style.backgroundColor = ''
    }
    anyWordBtn.classList.add('active')
    activeButton = anyWordBtn
    activeButton.style.backgroundColor = '#3d105f'
  }
}

export function handleArrowBtn () {
  isDescending = !isDescending

  let sortedCountries

  if (!filteredCountries) {
    sortedCountries = customSort(countries, isDescending)
  } else {
    sortedCountries = customSort(filteredCountries, isDescending)
  }

  arrowBtn.innerHTML = ''

  const icon = document.createElement('i')
  icon.classList.add('fa-solid', isDescending ? 'fa-arrow-up-a-z' : 'fa-arrow-down-a-z', 'fa-xl')
  arrowBtn.appendChild(icon)

  displayCountries(sortedCountries)
}

export function handleSearchBar () {
  const word = searchBar.value
  searchThroughAnyLetter(word)

  if (activeButton === startingWordBtn && word) {
    searchThroughStartingLetter(word)
  }

  if (activeButton === anyWordBtn && word) {
    searchThroughAnyLetter(word)
  }
}
