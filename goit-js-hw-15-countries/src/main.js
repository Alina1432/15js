import _ from 'lodash';
import fetchCountries, { getMessage } from './fetchCountries.js';

const searchInput = document.querySelector('#search-input');
const countryContainer = document.querySelector('#country-container');

searchInput.addEventListener('input', _.debounce(onSearchInput, 500));

function onSearchInput(event) {
  const searchQuery = event.target.value.trim();

  if (searchQuery === '') {
    getMessage(false, true)
    return;
  }

  fetchCountries(searchQuery)
    .then(data => {
      const countryInfoArray = data.data.objects;
      console.log(countryInfoArray);

      if (searchQuery === '') {
        countryInfoArray = [];
      }

      if (countryInfoArray.length > 10) {
        getMessage(true, false)
        countryContainer.innerHTML = '';
      } 
      else if (countryInfoArray.length >= 2 && countryInfoArray.length <= 10) {
        renderCountryList(countryInfoArray);
      } 
      else if (countryInfoArray.length === 1) {
        renderCountryCard(countryInfoArray[0]);
      }
      else if (countryInfoArray.length === 0) {
        getMessage(false, true)
      }
    })
}

function renderCountryList(countries) {
  const markup = countries
    .map(country => {
      const name = country.names.common;
      return `<li>${name}</li>`;
    })
    .join('');

  countryContainer.innerHTML = `<ul style="list-style: square; padding-left: 20px;">${markup}</ul>`;
}

// function renderCountryCard(country) {
//   const name = country.names.common;
//   const capital = country.capitals[0].name;
//   const population = country.population;
//   const flagUrl = country.flag.url_png;

//   const languagesMarkup = country.languages.map((language) => `<li>${language.name}</li>`).join('');
//   const markup = `
//     <div style="text-align: left; max-width: 650px; margin-top: 20px; font-family: sans-serif;">
//       <h1 style="font-size: 56px; margin-bottom: 20px; font-weight: normal; color: #000;">${name}</h1>
//       <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 40px;">
//         <div>
//           <p style="font-size: 22px; margin: 10px 0;"><strong>Capital:</strong> ${capital}</p>
//           <p style="font-size: 22px; margin: 10px 0;"><strong>Population:</strong> ${population}</p>
//           <p style="font-size: 22px; margin: 10px 0 5px 0;"><strong>Languages:</strong></p>
//           <ul style="font-size: 22px; padding-left: 30px; margin-top: 0;">
          
//           </ul>
//         </div>
//         <div>
//           <img src="${flagUrl}" alt="Flag of ${name}" width="280" style="border: 1px solid #ccc; box-shadow: 2px 2px 8px rgba(0,0,0,0.1);" />
//         </div>
//       </div>
//     </div>
//   `;

//   countryContainer.innerHTML = markup;
// }



function renderCountryCard(country) {
  const name = country.names.common;
  const capital = country.capitals[0].name;
  const population = country.population;
  const flagUrl = country.flag.url_png;

  const languagesMarkup = country.languages.map((language) => `<li>${language.name}</li>`).join('');
  const markup = `
    <div style="text-align: left; max-width: 650px; margin-top: 20px; font-family: sans-serif;">
      <h1 style="font-size: 56px; margin-bottom: 20px; font-weight: normal; color: #000;">${name}</h1>
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 40px;">
        <div>
          <p style="font-size: 22px; margin: 10px 0;"><strong>Capital:</strong> ${capital}</p>
          <p style="font-size: 22px; margin: 10px 0;"><strong>Population:</strong> ${population}</p>
          <p style="font-size: 22px; margin: 10px 0 5px 0;"><strong>Languages:</strong></p>
          <ul style="font-size: 22px; padding-left: 30px; margin-top: 0;">
            ${languagesMarkup}  </ul>
        </div>
        <div>
          <img src="${flagUrl}" alt="Flag of ${name}" width="280" style="border: 1px solid #ccc; box-shadow: 2px 2px 8px rgba(0,0,0,0.1);" />
        </div>
      </div>
    </div>
  `;

  countryContainer.innerHTML = markup;
}