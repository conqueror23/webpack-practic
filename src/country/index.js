// import {getCountries} from './getCountryList'
const getCountries =require('./getCountryList')

// console.log(getCountries);

const { countryList, countryListValues}=getCountries('en');

console.log('countryList,countryListValues',countryList,countryListValues);
