import axios from 'axios';
import { setCache, getCache } from '../services/cache';

/*
Список флагов
Возвращает массив из объектов вида data[n], флаг - data[n].flag, название страны - data[n].name, население - data[n].population
*/

export const getFlags = async () => {
    if (getCache('flags')) {
        return getCache('flags');
    }

    const url =  'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
    const { data: flags } = await axios.get(url);
    setCache('flags', flags);
    return flags;
};

/*
Возвращает количество населения страны country_slug
*/

export const getPopulationCountry = async (country_slug) => {
    const url =  `https://restcountries.eu/rest/v2/name/${country_slug}`;
    const { data: country } = await axios.get(url);
    const [result] = country.filter((el) => el.name.toLowerCase() === country_slug);

    return result.population;
};
