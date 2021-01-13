export const filters = {
  status: {
    confirmed : 'TotalConfirmed',
    deaths : 'TotalDeaths',
    recovered: 'TotalRecovered',
  },
  period: {
    all : 'All',
    lastDay : 'LastDay',
  },
  relative: {
    absolute : 'Absolute',
    to100men : 'To100men',
  },
  geography: '',
  allowed: {
    allowedNew: ['NewConfirmed', 'NewDeaths', 'NewRecovered'],
    allowedTotal: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
  },
  world: true,
};
