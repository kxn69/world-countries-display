import countries from '../data/countries.js'
import { countriesCount } from './element.js'
import { displayCountries } from './index.js'

let filteredCountries

// function that searches through countries with any letter
export function searchThroughAnyLetter (value) {
  const regex = new RegExp(value, 'gi')
  filteredCountries = countries.filter((item) => item.match(regex))

  if (value.length >= 1) {
    countriesCount.innerHTML = `Countries containing <span style="color:${getRandomColor()}">${value}</span> are <span style="color:${getRandomColor()}">${filteredCountries.length}</span>`
  } else {
    countriesCount.innerHTML = ''
  }

  displayCountries(filteredCountries)
}

// function that checks through countries with starting letter
export function searchThroughStartingLetter (value) {
  const regex = new RegExp('^' + value, 'gi')
  filteredCountries = countries.filter((item) => item.match(regex))
  if (value.length >= 1) {
    countriesCount.innerHTML = `Countries that starts with <span style="color:${getRandomColor()}">${value}</span> are <span style="color:${getRandomColor()}">${filteredCountries.length}</span>`
  } else {
    countriesCount.innerHTML = ''
  }
  displayCountries(filteredCountries)
}

// function to get random color
export function getRandomColor () {
  const characters = '0123456789ABCDEF'
  let color = '#'

  // Generate a random six-character color code
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)]
  }

  return color
}

export function customSort (array, isDescending) {
  return array.sort((a, b) => {
    if (isDescending) {
      return b.localeCompare(a)
    } else {
      return a.localeCompare(b)
    }
  })
}

export { filteredCountries }
