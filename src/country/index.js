// import {getCountries} from './getCountryList'
import getCountries from './getCountryList' 

// console.log(getCountries);

const { countryList, countryListValues}=getCountries('en');

console.log('countryList,countryListValues',countryList,countryListValues);
