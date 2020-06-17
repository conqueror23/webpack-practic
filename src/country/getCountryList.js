"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var i18nIsoCountries = require("i18n-iso-countries");
var getCountryList = function (lang) {
    var i18country = __assign({}, i18nIsoCountries.getNames(lang));
    /*fix Viet Nam bug*/
    if (lang === "en") {
        i18country.VN = "Vietnam";
    }
    var frequentCountryCodeList = [
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
    var frequentCountryList = frequentCountryCodeList.map(function (code) { return i18country[code]; });
    /*remove the frequentCountryCodeList in the country code list then can add back in the beginning */
    frequentCountryCodeList.forEach(function (key) {
        delete i18country[key];
    });
    var CountryCodeList = frequentCountryCodeList.concat(Object.keys(i18country));
    var countryList = frequentCountryList.concat(Object.values(i18country));
    var countryListValues = [];
    var countryValueObject = i18nIsoCountries.getNames("en");
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
