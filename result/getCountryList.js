"use strict";

var _i18nIsoCountries = _interopRequireDefault(require("i18n-iso-countries"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var getCountryList = function getCountryList(lang) {
  var i18country = _objectSpread({}, _i18nIsoCountries["default"].getNames(lang));
  /*fix Viet Nam bug*/


  if (lang === "en") {
    i18country.VN = "Vietnam";
  }

  var frequentCountryCodeList = ["AU", "CN", "ID", "VN", "AE", "HK", "MO", "TW", "SG", "MY", "EG"];
  var frequentCountryList = frequentCountryCodeList.map(function (code) {
    return i18country[code];
  });
  /*remove the frequentCountryCodeList in the country code list then can add back in the beginning */

  frequentCountryCodeList.forEach(function (key) {
    delete i18country[key];
  });

  var i18countryVals = Object.keys(i18country).map(function(key) {
    return i18country[key];
  });

  var CountryCodeList = frequentCountryCodeList.concat(Object.keys(i18country));
  var countryList = frequentCountryList.concat(i18countryVals);

  var countryListValues = [];

  var countryValueObject = _i18nIsoCountries["default"].getNames("en");

  countryValueObject.VN = "Vietnam";
  CountryCodeList.forEach(function (key, index) {
    countryListValues[index] = countryValueObject[key];
  });
  return {
    countryList: countryList,
    countryListValues: countryListValues
  };
};

window.getCountryList = getCountryList || {};