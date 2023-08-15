/* eslint-disable semi */

import countries from '../data/countries.js';
import { displayCountries } from '../lib/index.js';
import { startingWordBtn, anyWordBtn, arrowBtn, searchBar } from '../lib/element.js';
import { handleStartingWordBtn, handleAnyWordBtn, handleArrowBtn, handleSearchBar } from '../lib/handlers.js';

// Onload
displayCountries(countries);

startingWordBtn.addEventListener('click', handleStartingWordBtn);
anyWordBtn.addEventListener('click', handleAnyWordBtn);
arrowBtn.addEventListener('click', handleArrowBtn);
searchBar.addEventListener('input', handleSearchBar);
