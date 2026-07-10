// rc_live_ec4cfd05f6a74840a4ebfd55d604c943


//   const apiKey = 'Bearer rc_live_ec4cfd05f6a74840a4ebfd55d604c943';
  
// Експорт за дефолтом з параметром searchQuery
// export default function fetchCountries(searchQuery) {
//   // ТУТ МАЄ БУТИ ТІЛЬКИ ЧИСТИЙ КЛЮЧ (без слова Bearer на початку!)
//   const apiKey = 'rc_live_ec4cfd05f6a74840a4ebfd55d604c943'; 
  
//   // Додаємо косу риску в кінці URL (після ${searchQuery}/), щоб сервер не робив редиректів
//   const url = `https://api.restcountries.com/countries/v5/names.common?q=${searchQuery}`;

//   return fetch(url, {
//     method: 'GET',
//     headers: {
//       // Слово Bearer додається ОДИН раз саме тут, перед пробілом та чистим ключем:
//       'Authorization': `Bearer ${apiKey}`,
//       'Accept': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status); // Прокидаємо статус помилки (наприклад, 404)
//     }
//     return response.json();
//   });
// }


// 
// 
// овністю безкоштовний публічний API без лімітів, ключів та CORS-проблем
// export default function fetchCountries(searchQuery) {
//   const url = `https://restcountries.com/v3.1/name/${searchQuery}`;

//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status); // Прокидаємо статус (наприклад, 404)
//       }
//       return response.json();
//     });
// }



// export default function fetchCountries(searchQuery) {
//     const apiKey = 'Bearer rc_live_ec4cfd05f6a74840a4ebfd55d604c943';
//     const url = `https://api.restcountries.com/countries/v5/names.common?q=${searchQuery}`;

//     return fetch(url, {
//         headers: {
//             'Authorization': apiKey,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Країну не знайдено");
//         }
//         return response.json()
//     })
// }

// import _ from 'lodash';
// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// export default function fetchCountries(searchQuery) {
//     const authorizationKey = 'Bearer rc_live_ec4cfd05f6a74840a4ebfd55d604c943'
//     const url = `https://api.restcountries.com/countries/v5/names.common?q=${searchQuery}&limit=100`
//     return fetch(url, { headers: { 'Authorization': authorizationKey } })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('404 error')
//         }
//         return response.json()
//     })
//     .catch((err) => console.error(err));
// }

// export function getMessage(isTooMuchCountries = false, isNothingFound = false) {
//     if (isTooMuchCountries) {
//         return error({
//             text: 'Too many matches found. Please enter a more specific query!',
//             delay: 1000
//         })
//     }
//     else if (isNothingFound) {
//         return error({
//             text: 'No matches found for the query!',
//             delay: 1000
//         })
//     }
// }


import _ from 'lodash';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function fetchCountries(searchQuery) {
    const authorizationKey = 'Bearer rc_live_dd827d5689aa479bad2c223f2ea5424f'
    const url = `https://api.restcountries.com/countries/v5/names.common?q=${searchQuery}&limit=100`
    return fetch(url, { headers: { 'Authorization': authorizationKey } })
    .then((response) => {
        if (!response.ok) {
            throw new Error('404 error')
        }
        return response.json()
    })
    .catch((err) => console.error(err));
}

export function getMessage(isTooMuchCountries = false, isNothingFound = false) {
    if (isTooMuchCountries) {
        return error({
            text: 'Too many matches found. Please enter a more specific query!',
            delay: 1000
        })
    }
    else if (isNothingFound) {
        return error({
            text: 'No matches found for the query!',
            delay: 1000
        })
    }
}