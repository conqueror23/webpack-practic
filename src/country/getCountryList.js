import i18nIsoCountries from 'i18n-iso-countries'

const getCountryList = (lang) => {
  const i18country = { ...i18nIsoCountries.getNames(lang) };
  /*fix Viet Nam bug*/
  if (lang === "en") {
    i18country.VN = "Vietnam";
  }
  const frequentCountryCodeList = [
    "AU",
    "CN",
    "ID",
    "VN",
    "AE",
    "HK",
    "MO",
    "TW",
    "SG",
    "MY",
    "EG",
  ];
  const frequentCountryList = frequentCountryCodeList.map(
    (code) => i18country[code]
  );
  /*remove the frequentCountryCodeList in the country code list then can add back in the beginning */
  frequentCountryCodeList.forEach((key) => {
    delete i18country[key];
  });
  const CountryCodeList = frequentCountryCodeList.concat(
    Object.keys(i18country)
  );
  const countryList = frequentCountryList.concat(Object.values(i18country));
  const countryListValues = [];
  const countryValueObject = i18nIsoCountries.getNames("en");
  countryValueObject.VN = "Vietnam";
  CountryCodeList.forEach((key, index) => {
    countryListValues[index] = countryValueObject[key];
  });
  return {
    countryList,
    countryListValues,
  };
};

window.getCountryList  =getCountryList || {};


