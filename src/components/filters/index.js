import React from "react";
import { filters } from "../../constants/filters";
import {getFilterName} from "../../services/calculations";

const Filters = ({ globalFilters, updateFilters, dataForCountry, options }) => {
  const onSelectChange = (e) => {
    updateFilters({status: e.target.value});
  };

  const onRadioChangeRelative = (e) => {
    updateFilters({relative: e.target.value});
  };

  const onRadioChangePeriod = (e) => {
    updateFilters({period: e.target.value});
  };

  return (
    <>
      {
        options.relative && (
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  value={filters.relative.absolute}
                  checked={globalFilters.relative === filters.relative.absolute ? 'selected' : ''}
                  onChange={onRadioChangeRelative}/>
                {getFilterName(filters.relative.absolute)}</label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={filters.relative.to100men}
                  onChange={onRadioChangeRelative}
                  checked={globalFilters.relative === filters.relative.to100men ? 'selected' : ''}
                />
                {getFilterName(filters.relative.to100men)}</label>
            </div>
          </div>
        )
      }
      {
        options.period && (
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  value={filters.period.all}
                  checked={globalFilters.period === filters.period.all ? 'selected' : ''}
                  onChange={onRadioChangePeriod}/>
                {getFilterName(filters.period.all)}</label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={filters.period.lastDay}
                  onChange={onRadioChangePeriod}
                  checked={globalFilters.period === filters.period.lastDay ? 'selected' : ''}
                />
                {getFilterName(filters.period.lastDay)}</label>
            </div>
          </div>
        )
      }
      {
        options.status && (
          <div className="filer-select">
            <select onChange={onSelectChange} value={globalFilters.status}>
              <option value={filters.status.confirmed}>{getFilterName(filters.status.confirmed)}</option>
              <option value={filters.status.deaths}>{getFilterName(filters.status.deaths)}</option>
              <option value={filters.status.recovered}>{getFilterName(filters.status.recovered)}</option>
            </select>
          </div>
        )
      }
    </>
  );
};

export default Filters;