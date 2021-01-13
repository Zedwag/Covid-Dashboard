import { filters } from "../constants/filters";

export const getSelectFilters = (optionNumber) => {

    let status, period, relative;

    switch (optionNumber) {
        case 0:
        case 1:
        case 6:
        case 7:
            status = filters.status.confirmed;
            break;
        case 2:
        case 3:
        case 8:
        case 9:
            status = filters.status.deaths;
            break;
        case 4:
        case 5:
        case 10:
        case 11:
            status = filters.status.recovered;
            break;
        default:
            break;
    }

    if (optionNumber > 5) relative = filters.relative.to100men;
    else relative = filters.relative.absolute;

    if (optionNumber % 2 === 0) period = filters.period.all;
    else period = filters.period.lastDay;

    return {status, period, relative};
}

export const getSortedBy = (status, period, relative) => {
    let sortedBy = {}
    if (status === 'TotalConfirmed' && period === 'All' && relative === 'Absolute') sortedBy = {idx: 0, sortedBy: 'total cases'};
    if (status === 'TotalConfirmed' && period === 'LastDay' && relative === 'Absolute') sortedBy = {idx: 1, sortedBy: 'new cases'};
    if (status === 'TotalDeaths' && period === 'All' && relative === 'Absolute') sortedBy = {idx: 2, sortedBy: 'total deaths'};
    if (status === 'TotalDeaths' && period === 'LastDay' && relative === 'Absolute') sortedBy = {idx: 3, sortedBy: 'new deaths'};
    if (status === 'TotalRecovered' && period === 'All' && relative === 'Absolute') sortedBy = {idx: 4, sortedBy: 'total recovered'};
    if (status === 'TotalRecovered' && period === 'LastDay' && relative === 'Absolute') sortedBy = {idx: 5, sortedBy: 'new recovered'};
    if (status === 'TotalConfirmed' && period === 'All' && relative === 'To100men') sortedBy = {idx: 6, sortedBy: 'total cases per 100k'};
    if (status === 'TotalConfirmed' && period === 'LastDay' && relative === 'To100men') sortedBy = {idx: 7, sortedBy: 'new cases per 100k'};
    if (status === 'TotalDeaths' && period === 'All' && relative === 'To100men') sortedBy = {idx: 8, sortedBy: 'total deaths per 100k'};
    if (status === 'TotalDeaths' && period === 'LastDay' && relative === 'To100men') sortedBy = {idx: 9, sortedBy: 'new deaths per 100k'};
    if (status === 'TotalRecovered' && period === 'All' && relative === 'To100men') sortedBy = {idx: 10, sortedBy: 'total recovered per 100k'};
    if (status === 'TotalRecovered' && period === 'LastDay' && relative === 'To100men') sortedBy = {idx: 11, sortedBy: 'new recovered per 100k'};
    return sortedBy;
}
