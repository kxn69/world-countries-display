// get total-countries class
const totalCountries = document.querySelector('.total-countries')
totalCountries.textContent = `Total Number Of Countries: ${countries.length}`;

// get counties-count class
const countriesCount = document.querySelector('.countries-count');

// get countries-list class
const countriesList = document.querySelector('.countries-list');
countriesList.style.display = 'flex';
countriesList.style.flexWrap = 'wrap';
countriesList.style.width = '75%';
countriesList.style.margin = 'auto';
countriesList.style.justifyContent = 'center';

displayCountries(countries);

// get starting-word button
const startingWordBtn = document.querySelector('.starting-word.btn');

// get any-word button
const anyWordBtn = document.querySelector('.any-word.btn');

// get search bar
const searchBar = document.querySelector('#search-bar');

// get arrow button
const arrowButton = document.querySelector('.arrow-button')

let activeButton = null;
let isDescending = false;
let filteredCountries = countries;
//
startingWordBtn.addEventListener('click', () => {
        
    if (activeButton === startingWordBtn) {
        startingWordBtn.classList.remove('active');
        activeButton.style.backgroundColor = '';
        activeButton = null;
    } else {
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.style.backgroundColor = '';
        }
        startingWordBtn.classList.add('active');
        activeButton = startingWordBtn;
        activeButton.style.backgroundColor = '#3d105f';
    }
})

// event listener for any word button
anyWordBtn.addEventListener('click', () => {
    
    if (activeButton === anyWordBtn) {
        anyWordBtn.classList.remove('active');
        activeButton.style.backgroundColor = '';
        activeButton = null;
    } else {
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.style.backgroundColor = '';
        }
        anyWordBtn.classList.add('active');
        activeButton = anyWordBtn;
        activeButton.style.backgroundColor = '#3d105f';
    }
})

// event listener for arrow button
arrowButton.addEventListener('click', () => {
    const arrowBtn = document.querySelector('.arrow-button');
    console.log('working');
    isDescending = !isDescending;
  
    const sortedCountries = isDescending
      ? filteredCountries.sort((a, b) => b.localeCompare(a)) // Sort in descending order
      : filteredCountries.sort((a, b) => a.localeCompare(b)); // Sort in ascending order
  
    arrowBtn.innerHTML = '';
  
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', isDescending ? 'fa-arrow-up-a-z' : 'fa-arrow-down-a-z', 'fa-xl');
    arrowBtn.appendChild(icon);

    displayCountries(sortedCountries);
  });

// addEventListener for search bar button
searchBar.addEventListener('input', event => {
    let word = searchBar.value;
    searchThroughAnyLetter(word);
    
    if (activeButton === startingWordBtn && word) {
        searchThroughStartingLetter(word)
    }
    
    if (activeButton === anyWordBtn && word) {
        searchThroughAnyLetter(word);
    }
})

// create searchCountries function
function searchThroughAnyLetter(value) {
    const regex = new RegExp(value, 'gi');
    const filteredCountries = countries.filter((item) => item.match(regex));
    if (value.length >= 1) {
        countriesCount.innerHTML = `Countries containing <span style="color:${getRandomColor()}">${value}</span> are <span style="color:${getRandomColor()}">${filteredCountries.length}</span>`;
    } else {
        countriesCount.innerHTML = '';
    }
    displayCountries(filteredCountries);
}

// create function that checks through countries with starting letter
function searchThroughStartingLetter(value) {
    const regex = new RegExp('^' + value, 'gi');
    const filteredCountries = countries.filter((item) => item.match(regex));
    if (value.length >= 1) {
        countriesCount.innerHTML = `Countries that starts with <span style="color:${getRandomColor()}">${value}</span> are <span style="color:${getRandomColor()}">${filteredCountries.length}</span>`;
    } else {
        countriesCount.innerHTML = '';
    }
    displayCountries(filteredCountries);
}

// function to show countries
function displayCountries(filteredCountries) {
    countriesList.innerHTML = '';
    const countriesToDisplay = filteredCountries || countries;

    // iterate through countries data
    countriesToDisplay.forEach((country) => {
        const span = document.createElement('span');
        span.textContent = country;
        //style
        span.style.backgroundImage = 'url(/images/map_image.jpg)';
        span.style.backgroundSize = 'cover';
        span.style.backgroundPosition = 'center center';
        span.style.backgroundColor = 'grey';
        span.style.backgroundBlendMode = 'multiply';
        span.style.borderRadius = '4px';
        span.style.width = '130px';
        span.style.height = '130px';
        span.style.margin = '10px 20px';
        span.style.display = 'flex';
        span.style.alignItems = 'center';
        span.style.justifyContent = 'center';
        span.style.textTransform = 'uppercase';
        span.style.fontWeight = 'bold';

        countriesList.appendChild(span);
    })
}

// function to get random color
function getRandomColor() {
    const characters = '0123456789ABCDEF';
    let color = '#';
  
    // Generate a random six-character color code
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
  
    return color;
}