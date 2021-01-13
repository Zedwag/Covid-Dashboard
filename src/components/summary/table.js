import React from 'react';
import TdItem from './tdItem';

export default function Table({ tableName, current, currentCountryTitle }) {

  const userLang = navigator.language;
  const thNames = ['Confirmed', 'Deaths', 'Recovered']
  const items = Object.values(current);

    return (
        <table className='summaries-table'>
            <caption><h4 className='title'>{currentCountryTitle ? currentCountryTitle : tableName}</h4></caption>
            <thead>
                <tr>
                    {thNames.map((el) =>
                        <th scope="col">{el}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {items.map((el, i) =>
                        <TdItem thNames = {thNames[i]} key={i} value={new Intl.NumberFormat(userLang, { minimumFractionDigits: 0, maximumFractionDigits: 2}).format((el || 0))} />
                    )}
                </tr>
            </tbody>
        </table>
    )
}