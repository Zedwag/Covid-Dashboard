export const sortByParameter = (data, parameter) => {
  if (parameter === 'Country') return data.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);
  else return data.sort((a, b) => a[parameter] < b[parameter] ? 1 : -1)
};
