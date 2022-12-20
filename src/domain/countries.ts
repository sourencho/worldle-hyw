// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon
// Country area => https://github.com/samayo/country-json/blob/master/src/country-by-surface-area.json

import { areas } from "./countries.area";
import { countries } from "./countries.position";
import { corsicanCountryNames } from "./countries.name.co";
import { frenchCountryNames } from "./countries.name.fr";
import { hungarianCountryNames } from "./countries.name.hu";
import { dutchCountryNames } from "./countries.name.nl";
import { polishCountryNames } from "./countries.name.pl";
import { germanCountryNames } from "./countries.name.de";
import { countryCodesWithImage } from "./countries.image";
import { japaneseCountryNames } from "./countries.name.ja";
import { westernArmenianCountryNames } from "./countries.name.hyw";

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export const smallCountryLimit = 5000;
export const bigEnoughCountriesWithImage = countriesWithImage.filter(
  (country) => areas[country.code] > smallCountryLimit
);

export function getCountryName(language: string, country: Country) {
  switch (language) {
    case "hyw":
      return westernArmenianCountryNames[country.code];
    case "co":
      return corsicanCountryNames[country.code];
    case "fr":
      return frenchCountryNames[country.code];
    case "hu":
      return hungarianCountryNames[country.code];
    case "nl":
      return dutchCountryNames[country.code];
    case "pl":
      return polishCountryNames[country.code];
    case "de":
      return germanCountryNames[country.code];
    case "ja":
      return japaneseCountryNames[country.code];
    default:
      return country.name;
  }
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
