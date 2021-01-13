import axios from 'axios';
import { parse, format, addDays, endOfToday } from 'date-fns';
import { setCache, getCache } from '../services/cache';

const cache = {};
const BASE_URL = 'https://api.covid19api.com/';

/*
Список стран
Возвращает массив из объектов вида data[n], country_slug - data[n].Slug, название страны - data[n].Country
*/
export const getCovidCountries = async () => {
  const endPointCountries = 'countries';
  const { data: countries } = await axios.get(`${BASE_URL}${endPointCountries}`);
  return countries;
};

/*
Возвращает статистику всех статусов по стране по всем датам, массив объектов вида
{
Country: "China",
CountryCode: "",
CityCode: "",
Lat: "0",
Lon: "0",
Confirmed: 94025,
Deaths: 4748,
Recovered: 87707,
Active: 1570,
Date: "2020-12-10T00:00:00Z"
}
*/
export const getDataCountryFromDays = async (country_slug) => {
  if(!country_slug) {
    return;
  }
  country_slug = country_slug.split('(').join().split(')').join();
  if (cache[country_slug]) {
    return cache[country_slug];
  }

  if (getCache(country_slug)) {
    return getCache(country_slug);
  }

  const endPointCountries = `total/country/${country_slug}`;
  const { data: summaries } = await axios.get(`${BASE_URL}${endPointCountries}`);

  cache[country_slug] = summaries.map((el) => {
    return {
      ...el,
      TotalConfirmed: el.Confirmed,
      TotalDeaths: el.Deaths,
      TotalRecovered: el.Recovered,
    }
  });

  // cache[country_slug] = summaries;
  setCache(country_slug, cache[country_slug]);
  return cache[country_slug];
};

/* Возвращает данные по стране за последний день, объект типа:
{
Active: 1570
CityCode: ""
Confirmed: 94025
Country: "China"
CountryCode: ""
Date: "2020-12-10T00:00:00Z"
Deaths: 4748
Recovered: 87707
}
*/
export const getDataCountryLastDay = async (country_slug) => {
  if (cache[`${country_slug}_last_day`]) {
    return cache[`${country_slug}_last_day`];
  }

  const currentDate = endOfToday();
  const yesterday = addDays(currentDate, -1);
  const endPointCountries = `total/country/${country_slug}?from=${format(yesterday, 'Y-MM-dd')}&to=${format(currentDate, 'Y-MM-dd')}`;
  const { data: summaries } = await axios.get(`${BASE_URL}${endPointCountries}`);
  cache[`${country_slug}_last_day`] = summaries[0];

  return summaries[0];
};

/* Возвращает статистику всех статусов по всему миру по всем датам, массив объектов вида
{
Date: Tue Jan 28 2020 00:01:00 GMT+0300 (Moscow Standard Time)
NewConfirmed: 87137
NewDeaths: 8726
NewRecovered: 27085
Confirmed: 2155152
Deaths: 149156
Recovered: 490147
}
*/
export const getDataWorldFromDays = async () => {
  if (cache['world']) {
    return cache['world'];
  }

  if (getCache('world')) {
    return getCache('world');
  }

  const endPointCountries = 'world';
  const { data: summaries } = await axios.get(`${BASE_URL}${endPointCountries}`);
  summaries.sort((a, b) => a.TotalConfirmed > b.TotalConfirmed ? 1 : -1);
  const date = parse('22-01-2020', 'dd-mm-yyyy', new Date());

  cache['world'] = summaries.map((el, index) => {
    return {
      ...el,
      Date: addDays(date, index).toDateString()
    }
  });

  setCache('world', cache['world']);

  return cache['world'];
};

export const getSummaries = async () => {
  if (cache['summaries']) {
    return cache['summaries'];
  }

  if (getCache('summaries')) {
    return getCache('summaries');
  }

  const endPointCountries = 'summary';
  const { data: summaries } = await axios.get(`${BASE_URL}${endPointCountries}`);
  cache['summaries'] = summaries;
  setCache('summaries', cache['summaries']);
  return summaries;
};
