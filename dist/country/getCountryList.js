/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/country/getCountryList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/diacritics/index.js":
/*!******************************************!*\
  !*** ./node_modules/diacritics/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.remove = removeDiacritics;

var replacementList = [
  {
    base: ' ',
    chars: "\u00A0",
  }, {
    base: '0',
    chars: "\u07C0",
  }, {
    base: 'A',
    chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
  }, {
    base: 'AA',
    chars: "\uA732",
  }, {
    base: 'AE',
    chars: "\u00C6\u01FC\u01E2",
  }, {
    base: 'AO',
    chars: "\uA734",
  }, {
    base: 'AU',
    chars: "\uA736",
  }, {
    base: 'AV',
    chars: "\uA738\uA73A",
  }, {
    base: 'AY',
    chars: "\uA73C",
  }, {
    base: 'B',
    chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
  }, {
    base: 'C',
    chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
  }, {
    base: 'D',
    chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
  }, {
    base: 'Dh',
    chars: "\u00D0",
  }, {
    base: 'DZ',
    chars: "\u01F1\u01C4",
  }, {
    base: 'Dz',
    chars: "\u01F2\u01C5",
  }, {
    base: 'E',
    chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
  }, {
    base: 'F',
    chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
  }, {
    base: 'G',
    chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
  }, {
    base: 'H',
    chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
  }, {
    base: 'I',
    chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
  }, {
    base: 'J',
    chars: "\u24BF\uFF2A\u0134\u0248\u0237",
  }, {
    base: 'K',
    chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
  }, {
    base: 'L',
    chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
  }, {
    base: 'LJ',
    chars: "\u01C7",
  }, {
    base: 'Lj',
    chars: "\u01C8",
  }, {
    base: 'M',
    chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
  }, {
    base: 'N',
    chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
  }, {
    base: 'NJ',
    chars: "\u01CA",
  }, {
    base: 'Nj',
    chars: "\u01CB",
  }, {
    base: 'O',
    chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
  }, {
    base: 'OE',
    chars: "\u0152",
  }, {
    base: 'OI',
    chars: "\u01A2",
  }, {
    base: 'OO',
    chars: "\uA74E",
  }, {
    base: 'OU',
    chars: "\u0222",
  }, {
    base: 'P',
    chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
  }, {
    base: 'Q',
    chars: "\u24C6\uFF31\uA756\uA758\u024A",
  }, {
    base: 'R',
    chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
  }, {
    base: 'S',
    chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
  }, {
    base: 'T',
    chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
  }, {
    base: 'Th',
    chars: "\u00DE",
  }, {
    base: 'TZ',
    chars: "\uA728",
  }, {
    base: 'U',
    chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
  }, {
    base: 'V',
    chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
  }, {
    base: 'VY',
    chars: "\uA760",
  }, {
    base: 'W',
    chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
  }, {
    base: 'X',
    chars: "\u24CD\uFF38\u1E8A\u1E8C",
  }, {
    base: 'Y',
    chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
  }, {
    base: 'Z',
    chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
  }, {
    base: 'a',
    chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
  }, {
    base: 'aa',
    chars: "\uA733",
  }, {
    base: 'ae',
    chars: "\u00E6\u01FD\u01E3",
  }, {
    base: 'ao',
    chars: "\uA735",
  }, {
    base: 'au',
    chars: "\uA737",
  }, {
    base: 'av',
    chars: "\uA739\uA73B",
  }, {
    base: 'ay',
    chars: "\uA73D",
  }, {
    base: 'b',
    chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
  }, {
    base: 'c',
    chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
  }, {
    base: 'd',
    chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
  }, {
    base: 'dh',
    chars: "\u00F0",
  }, {
    base: 'dz',
    chars: "\u01F3\u01C6",
  }, {
    base: 'e',
    chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
  }, {
    base: 'f',
    chars: "\u24D5\uFF46\u1E1F\u0192",
  }, {
    base: 'ff',
    chars: "\uFB00",
  }, {
    base: 'fi',
    chars: "\uFB01",
  }, {
    base: 'fl',
    chars: "\uFB02",
  }, {
    base: 'ffi',
    chars: "\uFB03",
  }, {
    base: 'ffl',
    chars: "\uFB04",
  }, {
    base: 'g',
    chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
  }, {
    base: 'h',
    chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
  }, {
    base: 'hv',
    chars: "\u0195",
  }, {
    base: 'i',
    chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
  }, {
    base: 'j',
    chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
  }, {
    base: 'k',
    chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
  }, {
    base: 'l',
    chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
  }, {
    base: 'lj',
    chars: "\u01C9",
  }, {
    base: 'm',
    chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
  }, {
    base: 'n',
    chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
  }, {
    base: 'nj',
    chars: "\u01CC",
  }, {
    base: 'o',
    chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
  }, {
    base: 'oe',
    chars: "\u0153",
  }, {
    base: 'oi',
    chars: "\u01A3",
  }, {
    base: 'oo',
    chars: "\uA74F",
  }, {
    base: 'ou',
    chars: "\u0223",
  }, {
    base: 'p',
    chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
  }, {
    base: 'q',
    chars: "\u24E0\uFF51\u024B\uA757\uA759",
  }, {
    base: 'r',
    chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
  }, {
    base: 's',
    chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
  }, {
    base: 'ss',
    chars: "\xDF",
  }, {
    base: 't',
    chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
  }, {
    base: 'th',
    chars: "\u00FE",
  }, {
    base: 'tz',
    chars: "\uA729",
  }, {
    base: 'u',
    chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
  }, {
    base: 'v',
    chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
  }, {
    base: 'vy',
    chars: "\uA761",
  }, {
    base: 'w',
    chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
  }, {
    base: 'x',
    chars: "\u24E7\uFF58\u1E8B\u1E8D",
  }, {
    base: 'y',
    chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
  }, {
    base: 'z',
    chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
  }
];

var diacriticsMap = {};
for (var i = 0; i < replacementList.length; i += 1) {
  var chars = replacementList[i].chars;
  for (var j = 0; j < chars.length; j += 1) {
    diacriticsMap[chars[j]] = replacementList[i].base;
  }
}

function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007e]/g, function(c) {
    return diacriticsMap[c] || c;
  });
}

exports.replacementList = replacementList;
exports.diacriticsMap = diacriticsMap;


/***/ }),

/***/ "./node_modules/i18n-iso-countries/codes.json":
/*!****************************************************!*\
  !*** ./node_modules/i18n-iso-countries/codes.json ***!
  \****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, default */
/***/ (function(module) {

module.exports = JSON.parse("[[\"AF\",\"AFG\",\"004\",\"ISO 3166-2:AF\"],[\"AL\",\"ALB\",\"008\",\"ISO 3166-2:AL\"],[\"DZ\",\"DZA\",\"012\",\"ISO 3166-2:DZ\"],[\"AS\",\"ASM\",\"016\",\"ISO 3166-2:AS\"],[\"AD\",\"AND\",\"020\",\"ISO 3166-2:AD\"],[\"AO\",\"AGO\",\"024\",\"ISO 3166-2:AO\"],[\"AI\",\"AIA\",\"660\",\"ISO 3166-2:AI\"],[\"AQ\",\"ATA\",\"010\",\"ISO 3166-2:AQ\"],[\"AG\",\"ATG\",\"028\",\"ISO 3166-2:AG\"],[\"AR\",\"ARG\",\"032\",\"ISO 3166-2:AR\"],[\"AM\",\"ARM\",\"051\",\"ISO 3166-2:AM\"],[\"AW\",\"ABW\",\"533\",\"ISO 3166-2:AW\"],[\"AU\",\"AUS\",\"036\",\"ISO 3166-2:AU\"],[\"AT\",\"AUT\",\"040\",\"ISO 3166-2:AT\"],[\"AZ\",\"AZE\",\"031\",\"ISO 3166-2:AZ\"],[\"BS\",\"BHS\",\"044\",\"ISO 3166-2:BS\"],[\"BH\",\"BHR\",\"048\",\"ISO 3166-2:BH\"],[\"BD\",\"BGD\",\"050\",\"ISO 3166-2:BD\"],[\"BB\",\"BRB\",\"052\",\"ISO 3166-2:BB\"],[\"BY\",\"BLR\",\"112\",\"ISO 3166-2:BY\"],[\"BE\",\"BEL\",\"056\",\"ISO 3166-2:BE\"],[\"BZ\",\"BLZ\",\"084\",\"ISO 3166-2:BZ\"],[\"BJ\",\"BEN\",\"204\",\"ISO 3166-2:BJ\"],[\"BM\",\"BMU\",\"060\",\"ISO 3166-2:BM\"],[\"BT\",\"BTN\",\"064\",\"ISO 3166-2:BT\"],[\"BO\",\"BOL\",\"068\",\"ISO 3166-2:BO\"],[\"BA\",\"BIH\",\"070\",\"ISO 3166-2:BA\"],[\"BW\",\"BWA\",\"072\",\"ISO 3166-2:BW\"],[\"BV\",\"BVT\",\"074\",\"ISO 3166-2:BV\"],[\"BR\",\"BRA\",\"076\",\"ISO 3166-2:BR\"],[\"IO\",\"IOT\",\"086\",\"ISO 3166-2:IO\"],[\"BN\",\"BRN\",\"096\",\"ISO 3166-2:BN\"],[\"BG\",\"BGR\",\"100\",\"ISO 3166-2:BG\"],[\"BF\",\"BFA\",\"854\",\"ISO 3166-2:BF\"],[\"BI\",\"BDI\",\"108\",\"ISO 3166-2:BI\"],[\"KH\",\"KHM\",\"116\",\"ISO 3166-2:KH\"],[\"CM\",\"CMR\",\"120\",\"ISO 3166-2:CM\"],[\"CA\",\"CAN\",\"124\",\"ISO 3166-2:CA\"],[\"CV\",\"CPV\",\"132\",\"ISO 3166-2:CV\"],[\"KY\",\"CYM\",\"136\",\"ISO 3166-2:KY\"],[\"CF\",\"CAF\",\"140\",\"ISO 3166-2:CF\"],[\"TD\",\"TCD\",\"148\",\"ISO 3166-2:TD\"],[\"CL\",\"CHL\",\"152\",\"ISO 3166-2:CL\"],[\"CN\",\"CHN\",\"156\",\"ISO 3166-2:CN\"],[\"CX\",\"CXR\",\"162\",\"ISO 3166-2:CX\"],[\"CC\",\"CCK\",\"166\",\"ISO 3166-2:CC\"],[\"CO\",\"COL\",\"170\",\"ISO 3166-2:CO\"],[\"KM\",\"COM\",\"174\",\"ISO 3166-2:KM\"],[\"CG\",\"COG\",\"178\",\"ISO 3166-2:CG\"],[\"CD\",\"COD\",\"180\",\"ISO 3166-2:CD\"],[\"CK\",\"COK\",\"184\",\"ISO 3166-2:CK\"],[\"CR\",\"CRI\",\"188\",\"ISO 3166-2:CR\"],[\"CI\",\"CIV\",\"384\",\"ISO 3166-2:CI\"],[\"HR\",\"HRV\",\"191\",\"ISO 3166-2:HR\"],[\"CU\",\"CUB\",\"192\",\"ISO 3166-2:CU\"],[\"CY\",\"CYP\",\"196\",\"ISO 3166-2:CY\"],[\"CZ\",\"CZE\",\"203\",\"ISO 3166-2:CZ\"],[\"DK\",\"DNK\",\"208\",\"ISO 3166-2:DK\"],[\"DJ\",\"DJI\",\"262\",\"ISO 3166-2:DJ\"],[\"DM\",\"DMA\",\"212\",\"ISO 3166-2:DM\"],[\"DO\",\"DOM\",\"214\",\"ISO 3166-2:DO\"],[\"EC\",\"ECU\",\"218\",\"ISO 3166-2:EC\"],[\"EG\",\"EGY\",\"818\",\"ISO 3166-2:EG\"],[\"SV\",\"SLV\",\"222\",\"ISO 3166-2:SV\"],[\"GQ\",\"GNQ\",\"226\",\"ISO 3166-2:GQ\"],[\"ER\",\"ERI\",\"232\",\"ISO 3166-2:ER\"],[\"EE\",\"EST\",\"233\",\"ISO 3166-2:EE\"],[\"ET\",\"ETH\",\"231\",\"ISO 3166-2:ET\"],[\"FK\",\"FLK\",\"238\",\"ISO 3166-2:FK\"],[\"FO\",\"FRO\",\"234\",\"ISO 3166-2:FO\"],[\"FJ\",\"FJI\",\"242\",\"ISO 3166-2:FJ\"],[\"FI\",\"FIN\",\"246\",\"ISO 3166-2:FI\"],[\"FR\",\"FRA\",\"250\",\"ISO 3166-2:FR\"],[\"GF\",\"GUF\",\"254\",\"ISO 3166-2:GF\"],[\"PF\",\"PYF\",\"258\",\"ISO 3166-2:PF\"],[\"TF\",\"ATF\",\"260\",\"ISO 3166-2:TF\"],[\"GA\",\"GAB\",\"266\",\"ISO 3166-2:GA\"],[\"GM\",\"GMB\",\"270\",\"ISO 3166-2:GM\"],[\"GE\",\"GEO\",\"268\",\"ISO 3166-2:GE\"],[\"DE\",\"DEU\",\"276\",\"ISO 3166-2:DE\"],[\"GH\",\"GHA\",\"288\",\"ISO 3166-2:GH\"],[\"GI\",\"GIB\",\"292\",\"ISO 3166-2:GI\"],[\"GR\",\"GRC\",\"300\",\"ISO 3166-2:GR\"],[\"GL\",\"GRL\",\"304\",\"ISO 3166-2:GL\"],[\"GD\",\"GRD\",\"308\",\"ISO 3166-2:GD\"],[\"GP\",\"GLP\",\"312\",\"ISO 3166-2:GP\"],[\"GU\",\"GUM\",\"316\",\"ISO 3166-2:GU\"],[\"GT\",\"GTM\",\"320\",\"ISO 3166-2:GT\"],[\"GN\",\"GIN\",\"324\",\"ISO 3166-2:GN\"],[\"GW\",\"GNB\",\"624\",\"ISO 3166-2:GW\"],[\"GY\",\"GUY\",\"328\",\"ISO 3166-2:GY\"],[\"HT\",\"HTI\",\"332\",\"ISO 3166-2:HT\"],[\"HM\",\"HMD\",\"334\",\"ISO 3166-2:HM\"],[\"VA\",\"VAT\",\"336\",\"ISO 3166-2:VA\"],[\"HN\",\"HND\",\"340\",\"ISO 3166-2:HN\"],[\"HK\",\"HKG\",\"344\",\"ISO 3166-2:HK\"],[\"HU\",\"HUN\",\"348\",\"ISO 3166-2:HU\"],[\"IS\",\"ISL\",\"352\",\"ISO 3166-2:IS\"],[\"IN\",\"IND\",\"356\",\"ISO 3166-2:IN\"],[\"ID\",\"IDN\",\"360\",\"ISO 3166-2:ID\"],[\"IR\",\"IRN\",\"364\",\"ISO 3166-2:IR\"],[\"IQ\",\"IRQ\",\"368\",\"ISO 3166-2:IQ\"],[\"IE\",\"IRL\",\"372\",\"ISO 3166-2:IE\"],[\"IL\",\"ISR\",\"376\",\"ISO 3166-2:IL\"],[\"IT\",\"ITA\",\"380\",\"ISO 3166-2:IT\"],[\"JM\",\"JAM\",\"388\",\"ISO 3166-2:JM\"],[\"JP\",\"JPN\",\"392\",\"ISO 3166-2:JP\"],[\"JO\",\"JOR\",\"400\",\"ISO 3166-2:JO\"],[\"KZ\",\"KAZ\",\"398\",\"ISO 3166-2:KZ\"],[\"KE\",\"KEN\",\"404\",\"ISO 3166-2:KE\"],[\"KI\",\"KIR\",\"296\",\"ISO 3166-2:KI\"],[\"KP\",\"PRK\",\"408\",\"ISO 3166-2:KP\"],[\"KR\",\"KOR\",\"410\",\"ISO 3166-2:KR\"],[\"KW\",\"KWT\",\"414\",\"ISO 3166-2:KW\"],[\"KG\",\"KGZ\",\"417\",\"ISO 3166-2:KG\"],[\"LA\",\"LAO\",\"418\",\"ISO 3166-2:LA\"],[\"LV\",\"LVA\",\"428\",\"ISO 3166-2:LV\"],[\"LB\",\"LBN\",\"422\",\"ISO 3166-2:LB\"],[\"LS\",\"LSO\",\"426\",\"ISO 3166-2:LS\"],[\"LR\",\"LBR\",\"430\",\"ISO 3166-2:LR\"],[\"LY\",\"LBY\",\"434\",\"ISO 3166-2:LY\"],[\"LI\",\"LIE\",\"438\",\"ISO 3166-2:LI\"],[\"LT\",\"LTU\",\"440\",\"ISO 3166-2:LT\"],[\"LU\",\"LUX\",\"442\",\"ISO 3166-2:LU\"],[\"MO\",\"MAC\",\"446\",\"ISO 3166-2:MO\"],[\"MG\",\"MDG\",\"450\",\"ISO 3166-2:MG\"],[\"MW\",\"MWI\",\"454\",\"ISO 3166-2:MW\"],[\"MY\",\"MYS\",\"458\",\"ISO 3166-2:MY\"],[\"MV\",\"MDV\",\"462\",\"ISO 3166-2:MV\"],[\"ML\",\"MLI\",\"466\",\"ISO 3166-2:ML\"],[\"MT\",\"MLT\",\"470\",\"ISO 3166-2:MT\"],[\"MH\",\"MHL\",\"584\",\"ISO 3166-2:MH\"],[\"MQ\",\"MTQ\",\"474\",\"ISO 3166-2:MQ\"],[\"MR\",\"MRT\",\"478\",\"ISO 3166-2:MR\"],[\"MU\",\"MUS\",\"480\",\"ISO 3166-2:MU\"],[\"YT\",\"MYT\",\"175\",\"ISO 3166-2:YT\"],[\"MX\",\"MEX\",\"484\",\"ISO 3166-2:MX\"],[\"FM\",\"FSM\",\"583\",\"ISO 3166-2:FM\"],[\"MD\",\"MDA\",\"498\",\"ISO 3166-2:MD\"],[\"MC\",\"MCO\",\"492\",\"ISO 3166-2:MC\"],[\"MN\",\"MNG\",\"496\",\"ISO 3166-2:MN\"],[\"MS\",\"MSR\",\"500\",\"ISO 3166-2:MS\"],[\"MA\",\"MAR\",\"504\",\"ISO 3166-2:MA\"],[\"MZ\",\"MOZ\",\"508\",\"ISO 3166-2:MZ\"],[\"MM\",\"MMR\",\"104\",\"ISO 3166-2:MM\"],[\"NA\",\"NAM\",\"516\",\"ISO 3166-2:NA\"],[\"NR\",\"NRU\",\"520\",\"ISO 3166-2:NR\"],[\"NP\",\"NPL\",\"524\",\"ISO 3166-2:NP\"],[\"NL\",\"NLD\",\"528\",\"ISO 3166-2:NL\"],[\"NC\",\"NCL\",\"540\",\"ISO 3166-2:NC\"],[\"NZ\",\"NZL\",\"554\",\"ISO 3166-2:NZ\"],[\"NI\",\"NIC\",\"558\",\"ISO 3166-2:NI\"],[\"NE\",\"NER\",\"562\",\"ISO 3166-2:NE\"],[\"NG\",\"NGA\",\"566\",\"ISO 3166-2:NG\"],[\"NU\",\"NIU\",\"570\",\"ISO 3166-2:NU\"],[\"NF\",\"NFK\",\"574\",\"ISO 3166-2:NF\"],[\"MP\",\"MNP\",\"580\",\"ISO 3166-2:MP\"],[\"MK\",\"MKD\",\"807\",\"ISO 3166-2:MK\"],[\"NO\",\"NOR\",\"578\",\"ISO 3166-2:NO\"],[\"OM\",\"OMN\",\"512\",\"ISO 3166-2:OM\"],[\"PK\",\"PAK\",\"586\",\"ISO 3166-2:PK\"],[\"PW\",\"PLW\",\"585\",\"ISO 3166-2:PW\"],[\"PS\",\"PSE\",\"275\",\"ISO 3166-2:PS\"],[\"PA\",\"PAN\",\"591\",\"ISO 3166-2:PA\"],[\"PG\",\"PNG\",\"598\",\"ISO 3166-2:PG\"],[\"PY\",\"PRY\",\"600\",\"ISO 3166-2:PY\"],[\"PE\",\"PER\",\"604\",\"ISO 3166-2:PE\"],[\"PH\",\"PHL\",\"608\",\"ISO 3166-2:PH\"],[\"PN\",\"PCN\",\"612\",\"ISO 3166-2:PN\"],[\"PL\",\"POL\",\"616\",\"ISO 3166-2:PL\"],[\"PT\",\"PRT\",\"620\",\"ISO 3166-2:PT\"],[\"PR\",\"PRI\",\"630\",\"ISO 3166-2:PR\"],[\"QA\",\"QAT\",\"634\",\"ISO 3166-2:QA\"],[\"RE\",\"REU\",\"638\",\"ISO 3166-2:RE\"],[\"RO\",\"ROU\",\"642\",\"ISO 3166-2:RO\"],[\"RU\",\"RUS\",\"643\",\"ISO 3166-2:RU\"],[\"RW\",\"RWA\",\"646\",\"ISO 3166-2:RW\"],[\"SH\",\"SHN\",\"654\",\"ISO 3166-2:SH\"],[\"KN\",\"KNA\",\"659\",\"ISO 3166-2:KN\"],[\"LC\",\"LCA\",\"662\",\"ISO 3166-2:LC\"],[\"PM\",\"SPM\",\"666\",\"ISO 3166-2:PM\"],[\"VC\",\"VCT\",\"670\",\"ISO 3166-2:VC\"],[\"WS\",\"WSM\",\"882\",\"ISO 3166-2:WS\"],[\"SM\",\"SMR\",\"674\",\"ISO 3166-2:SM\"],[\"ST\",\"STP\",\"678\",\"ISO 3166-2:ST\"],[\"SA\",\"SAU\",\"682\",\"ISO 3166-2:SA\"],[\"SN\",\"SEN\",\"686\",\"ISO 3166-2:SN\"],[\"SC\",\"SYC\",\"690\",\"ISO 3166-2:SC\"],[\"SL\",\"SLE\",\"694\",\"ISO 3166-2:SL\"],[\"SG\",\"SGP\",\"702\",\"ISO 3166-2:SG\"],[\"SK\",\"SVK\",\"703\",\"ISO 3166-2:SK\"],[\"SI\",\"SVN\",\"705\",\"ISO 3166-2:SI\"],[\"SB\",\"SLB\",\"090\",\"ISO 3166-2:SB\"],[\"SO\",\"SOM\",\"706\",\"ISO 3166-2:SO\"],[\"ZA\",\"ZAF\",\"710\",\"ISO 3166-2:ZA\"],[\"GS\",\"SGS\",\"239\",\"ISO 3166-2:GS\"],[\"ES\",\"ESP\",\"724\",\"ISO 3166-2:ES\"],[\"LK\",\"LKA\",\"144\",\"ISO 3166-2:LK\"],[\"SD\",\"SDN\",\"729\",\"ISO 3166-2:SD\"],[\"SR\",\"SUR\",\"740\",\"ISO 3166-2:SR\"],[\"SJ\",\"SJM\",\"744\",\"ISO 3166-2:SJ\"],[\"SZ\",\"SWZ\",\"748\",\"ISO 3166-2:SZ\"],[\"SE\",\"SWE\",\"752\",\"ISO 3166-2:SE\"],[\"CH\",\"CHE\",\"756\",\"ISO 3166-2:CH\"],[\"SY\",\"SYR\",\"760\",\"ISO 3166-2:SY\"],[\"TW\",\"TWN\",\"158\",\"ISO 3166-2:TW\"],[\"TJ\",\"TJK\",\"762\",\"ISO 3166-2:TJ\"],[\"TZ\",\"TZA\",\"834\",\"ISO 3166-2:TZ\"],[\"TH\",\"THA\",\"764\",\"ISO 3166-2:TH\"],[\"TL\",\"TLS\",\"626\",\"ISO 3166-2:TL\"],[\"TG\",\"TGO\",\"768\",\"ISO 3166-2:TG\"],[\"TK\",\"TKL\",\"772\",\"ISO 3166-2:TK\"],[\"TO\",\"TON\",\"776\",\"ISO 3166-2:TO\"],[\"TT\",\"TTO\",\"780\",\"ISO 3166-2:TT\"],[\"TN\",\"TUN\",\"788\",\"ISO 3166-2:TN\"],[\"TR\",\"TUR\",\"792\",\"ISO 3166-2:TR\"],[\"TM\",\"TKM\",\"795\",\"ISO 3166-2:TM\"],[\"TC\",\"TCA\",\"796\",\"ISO 3166-2:TC\"],[\"TV\",\"TUV\",\"798\",\"ISO 3166-2:TV\"],[\"UG\",\"UGA\",\"800\",\"ISO 3166-2:UG\"],[\"UA\",\"UKR\",\"804\",\"ISO 3166-2:UA\"],[\"AE\",\"ARE\",\"784\",\"ISO 3166-2:AE\"],[\"GB\",\"GBR\",\"826\",\"ISO 3166-2:GB\"],[\"US\",\"USA\",\"840\",\"ISO 3166-2:US\"],[\"UM\",\"UMI\",\"581\",\"ISO 3166-2:UM\"],[\"UY\",\"URY\",\"858\",\"ISO 3166-2:UY\"],[\"UZ\",\"UZB\",\"860\",\"ISO 3166-2:UZ\"],[\"VU\",\"VUT\",\"548\",\"ISO 3166-2:VU\"],[\"VE\",\"VEN\",\"862\",\"ISO 3166-2:VE\"],[\"VN\",\"VNM\",\"704\",\"ISO 3166-2:VN\"],[\"VG\",\"VGB\",\"092\",\"ISO 3166-2:VG\"],[\"VI\",\"VIR\",\"850\",\"ISO 3166-2:VI\"],[\"WF\",\"WLF\",\"876\",\"ISO 3166-2:WF\"],[\"EH\",\"ESH\",\"732\",\"ISO 3166-2:EH\"],[\"YE\",\"YEM\",\"887\",\"ISO 3166-2:YE\"],[\"ZM\",\"ZMB\",\"894\",\"ISO 3166-2:ZM\"],[\"ZW\",\"ZWE\",\"716\",\"ISO 3166-2:ZW\"],[\"AX\",\"ALA\",\"248\",\"ISO 3166-2:AX\"],[\"BQ\",\"BES\",\"535\",\"ISO 3166-2:BQ\"],[\"CW\",\"CUW\",\"531\",\"ISO 3166-2:CW\"],[\"GG\",\"GGY\",\"831\",\"ISO 3166-2:GG\"],[\"IM\",\"IMN\",\"833\",\"ISO 3166-2:IM\"],[\"JE\",\"JEY\",\"832\",\"ISO 3166-2:JE\"],[\"ME\",\"MNE\",\"499\",\"ISO 3166-2:ME\"],[\"BL\",\"BLM\",\"652\",\"ISO 3166-2:BL\"],[\"MF\",\"MAF\",\"663\",\"ISO 3166-2:MF\"],[\"RS\",\"SRB\",\"688\",\"ISO 3166-2:RS\"],[\"SX\",\"SXM\",\"534\",\"ISO 3166-2:SX\"],[\"SS\",\"SSD\",\"728\",\"ISO 3166-2:SS\"],[\"XK\",\"XKX\",\"\",\"ISO 3166-2:XK\"]]");

/***/ }),

/***/ "./node_modules/i18n-iso-countries/index.js":
/*!**************************************************!*\
  !*** ./node_modules/i18n-iso-countries/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var codes = __webpack_require__(/*! ./codes.json */ "./node_modules/i18n-iso-countries/codes.json");
var removeDiacritics = __webpack_require__(/*! diacritics */ "./node_modules/diacritics/index.js").remove;
var registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function(codeInformation) {
  var s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

function formatNumericCode(code) {
  return String('000'+(code ? code : '')).slice(-3);
}

function registerLocale(localeData) {
  if (!localeData.locale) {
    throw new TypeError('Missing localeData.locale');
  }

  if (!localeData.countries) {
    throw new TypeError('Missing localeData.countries');
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

exports.registerLocale = registerLocale;

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
function alpha3ToAlpha2(code) {
  return alpha3[code];
}
exports.alpha3ToAlpha2 = alpha3ToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
function alpha2ToAlpha3(code) {
  return alpha2[code];
}
exports.alpha2ToAlpha3 = alpha2ToAlpha3;

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}
exports.alpha3ToNumeric = alpha3ToNumeric;

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}
exports.alpha2ToNumeric = alpha2ToNumeric;

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
function numericToAlpha3(code) {
  var padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}
exports.numericToAlpha3 = numericToAlpha3;

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
function numericToAlpha2(code) {
  var padded = formatNumericCode(code);
  return numeric[padded];
}
exports.numericToAlpha2 = numericToAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if(code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}
exports.toAlpha3 = toAlpha3;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if(code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}
exports.toAlpha2 = toAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function(code, lang) {
  try {
    const codeMaps = registeredLocales[lang.toLowerCase()];
    const names = codeMaps[toAlpha2(code)];
    return Array.isArray(names) ? names[0] : names;
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for country names
 * @return Object of country code mapped to county name
 */
exports.getNames = function(lang) {
  var d = registeredLocales[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }
  return d;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function(name, lang) {
  const normalizeString = (string) => string.toLowerCase();
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!codenames.hasOwnProperty(p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getSimpleAlpha2Code = function(name, lang) {
  const normalizeString = (string) => removeDiacritics(string.toLowerCase());
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);
  
  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!codenames.hasOwnProperty(p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Object of alpha-2 codes mapped to alpha-3 codes
 */
exports.getAlpha2Codes = function() {
  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getAlpha3Code = function(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getSimpleAlpha3Code = function(name, lang) {
  var alpha2 = this.getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
exports.getAlpha3Codes = function() {
  return alpha3;
};

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
exports.getNumericCodes = function() {
  return numeric;
};

/*
 * @return Array of supported languages
 */
exports.langs = function() {
  return Object.keys(registeredLocales);
};

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
 */
exports.isValid = function(code) {
  if (!code) {
    return false;
  }

  var coerced = code.toString().toUpperCase();
  return alpha3.hasOwnProperty(coerced) || alpha2.hasOwnProperty(coerced) ||
    numeric.hasOwnProperty(coerced);
};


/***/ }),

/***/ "./src/country/getCountryList.js":
/*!***************************************!*\
  !*** ./src/country/getCountryList.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__);


const getCountryList = (lang) => {
  const i18country = { ...i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0___default.a.getNames(lang) };
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
  const countryValueObject = i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0___default.a.getNames("en");
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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpYWNyaXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2kxOG4taXNvLWNvdW50cmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY291bnRyeS9nZXRDb3VudHJ5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGtFQUFjO0FBQ2xDLHVCQUF1QixtQkFBTyxDQUFDLHNEQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDalRBO0FBQUE7QUFBQTtBQUFpRDs7QUFFakQ7QUFDQSxzQkFBc0IsSUFBSSx5REFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjb3VudHJ5L2dldENvdW50cnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY291bnRyeS9nZXRDb3VudHJ5TGlzdC5qc1wiKTtcbiIsImV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlRGlhY3JpdGljcztcblxudmFyIHJlcGxhY2VtZW50TGlzdCA9IFtcbiAge1xuICAgIGJhc2U6ICcgJyxcbiAgICBjaGFyczogXCJcXHUwMEEwXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnMCcsXG4gICAgY2hhcnM6IFwiXFx1MDdDMFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0EnLFxuICAgIGNoYXJzOiBcIlxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2RlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0FBJyxcbiAgICBjaGFyczogXCJcXHVBNzMyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQUUnLFxuICAgIGNoYXJzOiBcIlxcdTAwQzZcXHUwMUZDXFx1MDFFMlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0FPJyxcbiAgICBjaGFyczogXCJcXHVBNzM0XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQVUnLFxuICAgIGNoYXJzOiBcIlxcdUE3MzZcIixcbiAgfSwge1xuICAgIGJhc2U6ICdBVicsXG4gICAgY2hhcnM6IFwiXFx1QTczOFxcdUE3M0FcIixcbiAgfSwge1xuICAgIGJhc2U6ICdBWScsXG4gICAgY2hhcnM6IFwiXFx1QTczQ1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ0InLFxuICAgIGNoYXJzOiBcIlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdDJyxcbiAgICBjaGFyczogXCJcXHUyNGI4XFx1ZmYyM1xcdUE3M0VcXHUxRTA4XFx1MDEwNlxcdTAwNDNcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MDE4N1xcdTAyM0JcIixcbiAgfSwge1xuICAgIGJhc2U6ICdEJyxcbiAgICBjaGFyczogXCJcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThBXFx1MDE4OVxcdTFEMDVcXHVBNzc5XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnRGgnLFxuICAgIGNoYXJzOiBcIlxcdTAwRDBcIixcbiAgfSwge1xuICAgIGJhc2U6ICdEWicsXG4gICAgY2hhcnM6IFwiXFx1MDFGMVxcdTAxQzRcIixcbiAgfSwge1xuICAgIGJhc2U6ICdEeicsXG4gICAgY2hhcnM6IFwiXFx1MDFGMlxcdTAxQzVcIixcbiAgfSwge1xuICAgIGJhc2U6ICdFJyxcbiAgICBjaGFyczogXCJcXHUwMjVCXFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVcXHUxRDA3XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnRicsXG4gICAgY2hhcnM6IFwiXFx1QTc3Q1xcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnRycsXG4gICAgY2hhcnM6IFwiXFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VcXHUwMjYyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnSCcsXG4gICAgY2hhcnM6IFwiXFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0knLFxuICAgIGNoYXJzOiBcIlxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnSicsXG4gICAgY2hhcnM6IFwiXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFxcdTAyMzdcIixcbiAgfSwge1xuICAgIGJhc2U6ICdLJyxcbiAgICBjaGFyczogXCJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnTCcsXG4gICAgY2hhcnM6IFwiXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIixcbiAgfSwge1xuICAgIGJhc2U6ICdMSicsXG4gICAgY2hhcnM6IFwiXFx1MDFDN1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ0xqJyxcbiAgICBjaGFyczogXCJcXHUwMUM4XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnTScsXG4gICAgY2hhcnM6IFwiXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1xcdTAzRkJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdOJyxcbiAgICBjaGFyczogXCJcXHVBN0E0XFx1MDIyMFxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAxOURcXHVBNzkwXFx1MUQwRVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ05KJyxcbiAgICBjaGFyczogXCJcXHUwMUNBXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnTmonLFxuICAgIGNoYXJzOiBcIlxcdTAxQ0JcIixcbiAgfSwge1xuICAgIGJhc2U6ICdPJyxcbiAgICBjaGFyczogXCJcXHUyNEM0XFx1RkYyRlxceEQyXFx4RDNcXHhENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHhENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxceEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xceEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENcIixcbiAgfSwge1xuICAgIGJhc2U6ICdPRScsXG4gICAgY2hhcnM6IFwiXFx1MDE1MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ09JJyxcbiAgICBjaGFyczogXCJcXHUwMUEyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnT08nLFxuICAgIGNoYXJzOiBcIlxcdUE3NEVcIixcbiAgfSwge1xuICAgIGJhc2U6ICdPVScsXG4gICAgY2hhcnM6IFwiXFx1MDIyMlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1AnLFxuICAgIGNoYXJzOiBcIlxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1EnLFxuICAgIGNoYXJzOiBcIlxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnUicsXG4gICAgY2hhcnM6IFwiXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1MnLFxuICAgIGNoYXJzOiBcIlxcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRcIixcbiAgfSwge1xuICAgIGJhc2U6ICdUJyxcbiAgICBjaGFyczogXCJcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4NlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1RoJyxcbiAgICBjaGFyczogXCJcXHUwMERFXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnVFonLFxuICAgIGNoYXJzOiBcIlxcdUE3MjhcIixcbiAgfSwge1xuICAgIGJhc2U6ICdVJyxcbiAgICBjaGFyczogXCJcXHUyNENBXFx1RkYzNVxceEQ5XFx4REFcXHhEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx4RENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnVicsXG4gICAgY2hhcnM6IFwiXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1ZZJyxcbiAgICBjaGFyczogXCJcXHVBNzYwXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnVycsXG4gICAgY2hhcnM6IFwiXFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnWCcsXG4gICAgY2hhcnM6IFwiXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ1knLFxuICAgIGNoYXJzOiBcIlxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxceEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1onLFxuICAgIGNoYXJzOiBcIlxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdhJyxcbiAgICBjaGFyczogXCJcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXFx1MDI1MVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2FhJyxcbiAgICBjaGFyczogXCJcXHVBNzMzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYWUnLFxuICAgIGNoYXJzOiBcIlxcdTAwRTZcXHUwMUZEXFx1MDFFM1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ2FvJyxcbiAgICBjaGFyczogXCJcXHVBNzM1XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYXUnLFxuICAgIGNoYXJzOiBcIlxcdUE3MzdcIixcbiAgfSwge1xuICAgIGJhc2U6ICdhdicsXG4gICAgY2hhcnM6IFwiXFx1QTczOVxcdUE3M0JcIixcbiAgfSwge1xuICAgIGJhc2U6ICdheScsXG4gICAgY2hhcnM6IFwiXFx1QTczRFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2InLFxuICAgIGNoYXJzOiBcIlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXFx1MDE4MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2MnLFxuICAgIGNoYXJzOiBcIlxcdUZGNDNcXHUyNEQyXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2QnLFxuICAgIGNoYXJzOiBcIlxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdTAxOEJcXHUxM0U3XFx1MDUwMVxcdUE3QUFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdkaCcsXG4gICAgY2hhcnM6IFwiXFx1MDBGMFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2R6JyxcbiAgICBjaGFyczogXCJcXHUwMUYzXFx1MDFDNlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2UnLFxuICAgIGNoYXJzOiBcIlxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMUREXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZicsXG4gICAgY2hhcnM6IFwiXFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2ZmJyxcbiAgICBjaGFyczogXCJcXHVGQjAwXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZmknLFxuICAgIGNoYXJzOiBcIlxcdUZCMDFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdmbCcsXG4gICAgY2hhcnM6IFwiXFx1RkIwMlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2ZmaScsXG4gICAgY2hhcnM6IFwiXFx1RkIwM1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ2ZmbCcsXG4gICAgY2hhcnM6IFwiXFx1RkIwNFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2cnLFxuICAgIGNoYXJzOiBcIlxcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdUE3N0ZcXHUxRDc5XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnaCcsXG4gICAgY2hhcnM6IFwiXFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVcIixcbiAgfSwge1xuICAgIGJhc2U6ICdodicsXG4gICAgY2hhcnM6IFwiXFx1MDE5NVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2knLFxuICAgIGNoYXJzOiBcIlxcdTI0RDhcXHVGRjQ5XFx4RUNcXHhFRFxceEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx4RUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnaicsXG4gICAgY2hhcnM6IFwiXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIixcbiAgfSwge1xuICAgIGJhc2U6ICdrJyxcbiAgICBjaGFyczogXCJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnbCcsXG4gICAgY2hhcnM6IFwiXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XFx1MDI2RFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2xqJyxcbiAgICBjaGFyczogXCJcXHUwMUM5XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnbScsXG4gICAgY2hhcnM6IFwiXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2RlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ24nLFxuICAgIGNoYXJzOiBcIlxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHhGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XFx1MDQzQlxcdTA1MDlcIixcbiAgfSwge1xuICAgIGJhc2U6ICduaicsXG4gICAgY2hhcnM6IFwiXFx1MDFDQ1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ28nLFxuICAgIGNoYXJzOiBcIlxcdTI0REVcXHVGRjRGXFx4RjJcXHhGM1xceEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxceEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx4RjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx4RjhcXHUwMUZGXFx1QTc0QlxcdUE3NERcXHUwMjc1XFx1MDI1NFxcdTFEMTFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdvZScsXG4gICAgY2hhcnM6IFwiXFx1MDE1M1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ29pJyxcbiAgICBjaGFyczogXCJcXHUwMUEzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnb28nLFxuICAgIGNoYXJzOiBcIlxcdUE3NEZcIixcbiAgfSwge1xuICAgIGJhc2U6ICdvdScsXG4gICAgY2hhcnM6IFwiXFx1MDIyM1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ3AnLFxuICAgIGNoYXJzOiBcIlxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NVxcdTAzQzFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdxJyxcbiAgICBjaGFyczogXCJcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3InLFxuICAgIGNoYXJzOiBcIlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNcIixcbiAgfSwge1xuICAgIGJhc2U6ICdzJyxcbiAgICBjaGFyczogXCJcXHUyNEUyXFx1RkY1M1xcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXFx1MDI4MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3NzJyxcbiAgICBjaGFyczogXCJcXHhERlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3QnLFxuICAgIGNoYXJzOiBcIlxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ3RoJyxcbiAgICBjaGFyczogXCJcXHUwMEZFXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndHonLFxuICAgIGNoYXJzOiBcIlxcdUE3MjlcIixcbiAgfSwge1xuICAgIGJhc2U6ICd1JyxcbiAgICBjaGFyczogXCJcXHUyNEU0XFx1RkY1NVxceEY5XFx4RkFcXHhGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx4RkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndicsXG4gICAgY2hhcnM6IFwiXFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ3Z5JyxcbiAgICBjaGFyczogXCJcXHVBNzYxXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndycsXG4gICAgY2hhcnM6IFwiXFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ3gnLFxuICAgIGNoYXJzOiBcIlxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIixcbiAgfSwge1xuICAgIGJhc2U6ICd5JyxcbiAgICBjaGFyczogXCJcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHhGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHhGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3onLFxuICAgIGNoYXJzOiBcIlxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNcIixcbiAgfVxuXTtcblxudmFyIGRpYWNyaXRpY3NNYXAgPSB7fTtcbmZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZW1lbnRMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gIHZhciBjaGFycyA9IHJlcGxhY2VtZW50TGlzdFtpXS5jaGFycztcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGFycy5sZW5ndGg7IGogKz0gMSkge1xuICAgIGRpYWNyaXRpY3NNYXBbY2hhcnNbal1dID0gcmVwbGFjZW1lbnRMaXN0W2ldLmJhc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGlhY3JpdGljcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3ZV0vZywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBkaWFjcml0aWNzTWFwW2NdIHx8IGM7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJlcGxhY2VtZW50TGlzdCA9IHJlcGxhY2VtZW50TGlzdDtcbmV4cG9ydHMuZGlhY3JpdGljc01hcCA9IGRpYWNyaXRpY3NNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNvZGVzID0gcmVxdWlyZShcIi4vY29kZXMuanNvblwiKTtcbnZhciByZW1vdmVEaWFjcml0aWNzID0gcmVxdWlyZSgnZGlhY3JpdGljcycpLnJlbW92ZTtcbnZhciByZWdpc3RlcmVkTG9jYWxlcyA9IHt9O1xuXG4vKlxuICogQWxsIGNvZGVzIG1hcCB0byBJU08gMzE2Ni0xIGFscGhhLTJcbiAqL1xudmFyIGFscGhhMiA9IHt9LFxuICBhbHBoYTMgPSB7fSxcbiAgbnVtZXJpYyA9IHt9LFxuICBpbnZlcnRlZE51bWVyaWMgPSB7fTtcblxuY29kZXMuZm9yRWFjaChmdW5jdGlvbihjb2RlSW5mb3JtYXRpb24pIHtcbiAgdmFyIHMgPSBjb2RlSW5mb3JtYXRpb247XG4gIGFscGhhMltzWzBdXSA9IHNbMV07XG4gIGFscGhhM1tzWzFdXSA9IHNbMF07XG4gIG51bWVyaWNbc1syXV0gPSBzWzBdO1xuICBpbnZlcnRlZE51bWVyaWNbc1swXV0gPSBzWzJdO1xufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWVyaWNDb2RlKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZygnMDAwJysoY29kZSA/IGNvZGUgOiAnJykpLnNsaWNlKC0zKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMb2NhbGUobG9jYWxlRGF0YSkge1xuICBpZiAoIWxvY2FsZURhdGEubG9jYWxlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlzc2luZyBsb2NhbGVEYXRhLmxvY2FsZScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGVEYXRhLmNvdW50cmllcykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01pc3NpbmcgbG9jYWxlRGF0YS5jb3VudHJpZXMnKTtcbiAgfVxuXG4gIHJlZ2lzdGVyZWRMb2NhbGVzW2xvY2FsZURhdGEubG9jYWxlXSA9IGxvY2FsZURhdGEuY291bnRyaWVzO1xufVxuXG5leHBvcnRzLnJlZ2lzdGVyTG9jYWxlID0gcmVnaXN0ZXJMb2NhbGU7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBBbHBoYS0zIGNvZGVcbiAqIEByZXR1cm4gQWxwaGEtMiBjb2RlIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBhbHBoYTNUb0FscGhhMihjb2RlKSB7XG4gIHJldHVybiBhbHBoYTNbY29kZV07XG59XG5leHBvcnRzLmFscGhhM1RvQWxwaGEyID0gYWxwaGEzVG9BbHBoYTI7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBBbHBoYS0yIGNvZGVcbiAqIEByZXR1cm4gQWxwaGEtMyBjb2RlIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBhbHBoYTJUb0FscGhhMyhjb2RlKSB7XG4gIHJldHVybiBhbHBoYTJbY29kZV07XG59XG5leHBvcnRzLmFscGhhMlRvQWxwaGEzID0gYWxwaGEyVG9BbHBoYTM7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBBbHBoYS0zIGNvZGVcbiAqIEByZXR1cm4gTnVtZXJpYyBjb2RlIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBhbHBoYTNUb051bWVyaWMoY29kZSkge1xuICByZXR1cm4gaW52ZXJ0ZWROdW1lcmljW2FscGhhM1RvQWxwaGEyKGNvZGUpXTtcbn1cbmV4cG9ydHMuYWxwaGEzVG9OdW1lcmljID0gYWxwaGEzVG9OdW1lcmljO1xuXG4vKlxuICogQHBhcmFtIGNvZGUgQWxwaGEtMiBjb2RlXG4gKiBAcmV0dXJuIE51bWVyaWMgY29kZSBvciB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gYWxwaGEyVG9OdW1lcmljKGNvZGUpIHtcbiAgcmV0dXJuIGludmVydGVkTnVtZXJpY1tjb2RlXTtcbn1cbmV4cG9ydHMuYWxwaGEyVG9OdW1lcmljID0gYWxwaGEyVG9OdW1lcmljO1xuXG4vKlxuICogQHBhcmFtIGNvZGUgTnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIEFscGhhLTMgY29kZSBvciB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gbnVtZXJpY1RvQWxwaGEzKGNvZGUpIHtcbiAgdmFyIHBhZGRlZCA9IGZvcm1hdE51bWVyaWNDb2RlKGNvZGUpO1xuICByZXR1cm4gYWxwaGEyVG9BbHBoYTMobnVtZXJpY1twYWRkZWRdKTtcbn1cbmV4cG9ydHMubnVtZXJpY1RvQWxwaGEzID0gbnVtZXJpY1RvQWxwaGEzO1xuXG4vKlxuICogQHBhcmFtIGNvZGUgTnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIEFscGhhLTIgY29kZSBvciB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gbnVtZXJpY1RvQWxwaGEyKGNvZGUpIHtcbiAgdmFyIHBhZGRlZCA9IGZvcm1hdE51bWVyaWNDb2RlKGNvZGUpO1xuICByZXR1cm4gbnVtZXJpY1twYWRkZWRdO1xufVxuZXhwb3J0cy5udW1lcmljVG9BbHBoYTIgPSBudW1lcmljVG9BbHBoYTI7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtM1xuICovXG5mdW5jdGlvbiB0b0FscGhhMyhjb2RlKSB7XG4gIGlmICh0eXBlb2YgY29kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICgvXlswLTldKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgIHJldHVybiBudW1lcmljVG9BbHBoYTMoY29kZSk7XG4gICAgfVxuICAgIGlmKGNvZGUubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gYWxwaGEyVG9BbHBoYTMoY29kZS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKGNvZGUubGVuZ3RoID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGNvZGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbnVtZXJpY1RvQWxwaGEzKGNvZGUpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnRvQWxwaGEzID0gdG9BbHBoYTM7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtMlxuICovXG5mdW5jdGlvbiB0b0FscGhhMihjb2RlKSB7XG4gIGlmICh0eXBlb2YgY29kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICgvXlswLTldKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgIHJldHVybiBudW1lcmljVG9BbHBoYTIoY29kZSk7XG4gICAgfVxuICAgIGlmIChjb2RlLmxlbmd0aCA9PT0gMikge1xuICAgICAgcmV0dXJuIGNvZGUudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgaWYoY29kZS5sZW5ndGggPT09IDMpIHtcbiAgICAgIHJldHVybiBhbHBoYTNUb0FscGhhMihjb2RlLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGNvZGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbnVtZXJpY1RvQWxwaGEyKGNvZGUpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnRvQWxwaGEyID0gdG9BbHBoYTI7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcGFyYW0gbGFuZyBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcmV0dXJuIG5hbWUgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZ2V0TmFtZSA9IGZ1bmN0aW9uKGNvZGUsIGxhbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb2RlTWFwcyA9IHJlZ2lzdGVyZWRMb2NhbGVzW2xhbmcudG9Mb3dlckNhc2UoKV07XG4gICAgY29uc3QgbmFtZXMgPSBjb2RlTWFwc1t0b0FscGhhMihjb2RlKV07XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXNbMF0gOiBuYW1lcztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLypcbiAqIEBwYXJhbSBsYW5nIGxhbmd1YWdlIGZvciBjb3VudHJ5IG5hbWVzXG4gKiBAcmV0dXJuIE9iamVjdCBvZiBjb3VudHJ5IGNvZGUgbWFwcGVkIHRvIGNvdW50eSBuYW1lXG4gKi9cbmV4cG9ydHMuZ2V0TmFtZXMgPSBmdW5jdGlvbihsYW5nKSB7XG4gIHZhciBkID0gcmVnaXN0ZXJlZExvY2FsZXNbbGFuZy50b0xvd2VyQ2FzZSgpXTtcbiAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gZDtcbn07XG5cbi8qXG4gKiBAcGFyYW0gbmFtZSBuYW1lXG4gKiBAcGFyYW0gbGFuZyBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtMiBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTJDb2RlID0gZnVuY3Rpb24obmFtZSwgbGFuZykge1xuICBjb25zdCBub3JtYWxpemVTdHJpbmcgPSAoc3RyaW5nKSA9PiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYXJlU2ltaWxhciA9IChhLCBiKSA9PiBub3JtYWxpemVTdHJpbmcoYSkgPT09IG5vcm1hbGl6ZVN0cmluZyhiKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGNvZGVuYW1lcyA9IHJlZ2lzdGVyZWRMb2NhbGVzW2xhbmcudG9Mb3dlckNhc2UoKV07XG4gICAgZm9yIChjb25zdCBwIGluIGNvZGVuYW1lcykge1xuICAgICAgaWYgKCFjb2RlbmFtZXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvZGVuYW1lc1twXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoYXJlU2ltaWxhcihjb2RlbmFtZXNbcF0sIG5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvZGVuYW1lc1twXSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBtYXBwZWROYW1lIG9mIGNvZGVuYW1lc1twXSkge1xuICAgICAgICAgIGlmIChhcmVTaW1pbGFyKG1hcHBlZE5hbWUsIG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLypcbiAqIEBwYXJhbSBuYW1lIG5hbWVcbiAqIEBwYXJhbSBsYW5nIGxhbmd1YWdlIGZvciBjb3VudHJ5IG5hbWVcbiAqIEByZXR1cm4gSVNPIDMxNjYtMSBhbHBoYS0yIG9yIHVuZGVmaW5lZFxuICovXG5leHBvcnRzLmdldFNpbXBsZUFscGhhMkNvZGUgPSBmdW5jdGlvbihuYW1lLCBsYW5nKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHJlbW92ZURpYWNyaXRpY3Moc3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuICBjb25zdCBhcmVTaW1pbGFyID0gKGEsIGIpID0+IG5vcm1hbGl6ZVN0cmluZyhhKSA9PT0gbm9ybWFsaXplU3RyaW5nKGIpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBjb2RlbmFtZXMgPSByZWdpc3RlcmVkTG9jYWxlc1tsYW5nLnRvTG93ZXJDYXNlKCldO1xuICAgIGZvciAoY29uc3QgcCBpbiBjb2RlbmFtZXMpIHtcbiAgICAgIGlmICghY29kZW5hbWVzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb2RlbmFtZXNbcF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGFyZVNpbWlsYXIoY29kZW5hbWVzW3BdLCBuYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2RlbmFtZXNbcF0pKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWFwcGVkTmFtZSBvZiBjb2RlbmFtZXNbcF0pIHtcbiAgICAgICAgICBpZiAoYXJlU2ltaWxhcihtYXBwZWROYW1lLCBuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbi8qXG4gKiBAcmV0dXJuIE9iamVjdCBvZiBhbHBoYS0yIGNvZGVzIG1hcHBlZCB0byBhbHBoYS0zIGNvZGVzXG4gKi9cbmV4cG9ydHMuZ2V0QWxwaGEyQ29kZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGFscGhhMjtcbn07XG5cbi8qXG4gKiBAcGFyYW0gbmFtZSBuYW1lXG4gKiBAcGFyYW0gbGFuZyBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtMyBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTNDb2RlID0gZnVuY3Rpb24obmFtZSwgbGFuZykge1xuICB2YXIgYWxwaGEyID0gdGhpcy5nZXRBbHBoYTJDb2RlKG5hbWUsIGxhbmcpO1xuICBpZiAoYWxwaGEyKSB7XG4gICAgcmV0dXJuIHRoaXMudG9BbHBoYTMoYWxwaGEyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vKlxuICogQHBhcmFtIG5hbWUgbmFtZVxuICogQHBhcmFtIGxhbmcgbGFuZ3VhZ2UgZm9yIGNvdW50cnkgbmFtZVxuICogQHJldHVybiBJU08gMzE2Ni0xIGFscGhhLTMgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZ2V0U2ltcGxlQWxwaGEzQ29kZSA9IGZ1bmN0aW9uKG5hbWUsIGxhbmcpIHtcbiAgdmFyIGFscGhhMiA9IHRoaXMuZ2V0U2ltcGxlQWxwaGEyQ29kZShuYW1lLCBsYW5nKTtcbiAgaWYgKGFscGhhMikge1xuICAgIHJldHVybiB0aGlzLnRvQWxwaGEzKGFscGhhMik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLypcbiAqIEByZXR1cm4gT2JqZWN0IG9mIGFscGhhLTMgY29kZXMgbWFwcGVkIHRvIGFscGhhLTIgY29kZXNcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTNDb2RlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYWxwaGEzO1xufTtcblxuLypcbiAqIEByZXR1cm4gT2JqZWN0IG9mIG51bWVyaWMgY29kZXMgbWFwcGVkIHRvIGFscGhhLTIgY29kZXNcbiAqL1xuZXhwb3J0cy5nZXROdW1lcmljQ29kZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG51bWVyaWM7XG59O1xuXG4vKlxuICogQHJldHVybiBBcnJheSBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKi9cbmV4cG9ydHMubGFuZ3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJlZ2lzdGVyZWRMb2NhbGVzKTtcbn07XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIEJvb2xlYW5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24oY29kZSkge1xuICBpZiAoIWNvZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgY29lcmNlZCA9IGNvZGUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gYWxwaGEzLmhhc093blByb3BlcnR5KGNvZXJjZWQpIHx8IGFscGhhMi5oYXNPd25Qcm9wZXJ0eShjb2VyY2VkKSB8fFxuICAgIG51bWVyaWMuaGFzT3duUHJvcGVydHkoY29lcmNlZCk7XG59O1xuIiwiaW1wb3J0IGkxOG5Jc29Db3VudHJpZXMgZnJvbSAnaTE4bi1pc28tY291bnRyaWVzJ1xuXG5jb25zdCBnZXRDb3VudHJ5TGlzdCA9IChsYW5nKSA9PiB7XG4gIGNvbnN0IGkxOGNvdW50cnkgPSB7IC4uLmkxOG5Jc29Db3VudHJpZXMuZ2V0TmFtZXMobGFuZykgfTtcbiAgLypmaXggVmlldCBOYW0gYnVnKi9cbiAgaWYgKGxhbmcgPT09IFwiZW5cIikge1xuICAgIGkxOGNvdW50cnkuVk4gPSBcIlZpZXRuYW1cIjtcbiAgfVxuICBjb25zdCBmcmVxdWVudENvdW50cnlDb2RlTGlzdCA9IFtcbiAgICBcIkFVXCIsXG4gICAgXCJDTlwiLFxuICAgIFwiSURcIixcbiAgICBcIlZOXCIsXG4gICAgXCJBRVwiLFxuICAgIFwiSEtcIixcbiAgICBcIk1PXCIsXG4gICAgXCJUV1wiLFxuICAgIFwiU0dcIixcbiAgICBcIk1ZXCIsXG4gICAgXCJFR1wiLFxuICBdO1xuICBjb25zdCBmcmVxdWVudENvdW50cnlMaXN0ID0gZnJlcXVlbnRDb3VudHJ5Q29kZUxpc3QubWFwKFxuICAgIChjb2RlKSA9PiBpMThjb3VudHJ5W2NvZGVdXG4gICk7XG4gIC8qcmVtb3ZlIHRoZSBmcmVxdWVudENvdW50cnlDb2RlTGlzdCBpbiB0aGUgY291bnRyeSBjb2RlIGxpc3QgdGhlbiBjYW4gYWRkIGJhY2sgaW4gdGhlIGJlZ2lubmluZyAqL1xuICBmcmVxdWVudENvdW50cnlDb2RlTGlzdC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkZWxldGUgaTE4Y291bnRyeVtrZXldO1xuICB9KTtcbiAgY29uc3QgQ291bnRyeUNvZGVMaXN0ID0gZnJlcXVlbnRDb3VudHJ5Q29kZUxpc3QuY29uY2F0KFxuICAgIE9iamVjdC5rZXlzKGkxOGNvdW50cnkpXG4gICk7XG4gIGNvbnN0IGNvdW50cnlMaXN0ID0gZnJlcXVlbnRDb3VudHJ5TGlzdC5jb25jYXQoT2JqZWN0LnZhbHVlcyhpMThjb3VudHJ5KSk7XG4gIGNvbnN0IGNvdW50cnlMaXN0VmFsdWVzID0gW107XG4gIGNvbnN0IGNvdW50cnlWYWx1ZU9iamVjdCA9IGkxOG5Jc29Db3VudHJpZXMuZ2V0TmFtZXMoXCJlblwiKTtcbiAgY291bnRyeVZhbHVlT2JqZWN0LlZOID0gXCJWaWV0bmFtXCI7XG4gIENvdW50cnlDb2RlTGlzdC5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgY291bnRyeUxpc3RWYWx1ZXNbaW5kZXhdID0gY291bnRyeVZhbHVlT2JqZWN0W2tleV07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvdW50cnlMaXN0LFxuICAgIGNvdW50cnlMaXN0VmFsdWVzLFxuICB9O1xufTtcblxud2luZG93LmdldENvdW50cnlMaXN0ICA9Z2V0Q291bnRyeUxpc3QgfHwge307XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==