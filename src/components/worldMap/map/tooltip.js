import {getFilterName} from "../../../services/calculations";
import {filters} from "../../../constants/filters";
const userLang = navigator.language;

const Tooltip = ({ dataCountry, customStyles, globalFilters }) => {
  const roundDijit = (globalFilters.relative === filters.relative.to100men) ? 2 : 0;
    return (
      <div id="tooltip" className="tooltip" style={{ display: 'none', ...customStyles }}>
          <h5>Country: {dataCountry.Country}</h5>
          <table>
              <tbody>
              <tr>
                  <td>{getFilterName(globalFilters.status)}, {getFilterName(globalFilters.relative)}, {getFilterName(globalFilters.period)}:</td>
                  <td>{new Intl.NumberFormat(userLang, { minimumFractionDigits: 0, maximumFractionDigits: 2}).format((dataCountry.Data || 0).toFixed(roundDijit))}</td>
              </tr>
              </tbody>
          </table>
      </div>
    );
};

export default Tooltip;
