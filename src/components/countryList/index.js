import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Draggable from 'react-draggable';
import { missedFlags, missedPopulations } from '../../constants/missed';
import { sortByParameter } from '../../services/sorting';
import { getSelectFilters, getSortedBy } from "../../services/selectFilters";
import { getFilterName } from "../../services/calculations";
import { ReactComponent as MinimizeIcon } from "../../icons/small.svg";
import { ReactComponent as MaximizeIcon } from "../../icons/plus.svg";
import { ReactComponent as Expand } from "../../icons/expand.svg";
import {ReactComponent as VKeyboard} from "../../icons/keypad.svg";

import Filters from "../filters";

const sortParameters = {
    'total cases': 'TotalConfirmed',
    'new cases': 'NewConfirmed',
    'total deaths': 'TotalDeaths',
    'new deaths': 'NewDeaths',
    'total recovered': 'TotalRecovered',
    'new recovered': 'NewRecovered',
    'total cases per 100k': 'TotalConfirmedPerPopulation',
    'new cases per 100k': 'NewConfirmedPerPopulation',
    'total deaths per 100k': 'TotalDeathsPerPopulation',
    'new deaths per 100k': 'NewDeathsPerPopulation',
    'total recovered per 100k': 'TotalRecoveredPerPopulation',
    'new recovered per 100k': 'NewRecoveredPerPopulation',
};

const defaultPosition = {x: 0, y: 0};

class CountryList extends React.Component {
    constructor() {
        super();

        this.state = {
            sortedBy: 'total cases',
            globalFilters: {},
            filterText: '',
            expanded:false,
            fullSize:true,
            minimize:true,
            maximize:false,
        };

        this.listRef = React.createRef();
        this.tbodyRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            sortedBy: 'total cases',
            globalFilters: this.props.globalFilters,
            filterText: '',
            expanded: false,
            fullSize: true,
        });

        this.initKeyboard();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const scrollToActive = () => {
            const { status, period, relative } = this.props.globalFilters;
            const sortedByObj = getSortedBy(status, period, relative);

            const data = this.props.summaries.map(country => {
                return {
                    ...country,
                    TotalConfirmedPerPopulation: ((country.TotalConfirmed * 100000) / country.population),
                    NewConfirmedPerPopulation: ((country.NewConfirmed * 100000) / country.population),
                    TotalDeathsPerPopulation: ((country.TotalDeaths * 100000) / country.population),
                    NewDeathsPerPopulation: ((country.NewDeaths * 100000) / country.population),
                    TotalRecoveredPerPopulation: ((country.TotalRecovered * 100000) / country.population),
                    NewRecoveredPerPopulation: ((country.NewRecovered * 100000) / country.population),
                }
            })
            const countryIdx = sortByParameter(data, sortParameters[sortedByObj.sortedBy]).findIndex(el => el['Country'] === this.props.globalFilters.geography);
            if (countryIdx && this.tbodyRef.current.children[countryIdx]) {

                this.tbodyRef.current.children[countryIdx].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }

        if ((this.props.globalFilters !== this.state.globalFilters) && this.props !== prevProps) {
            const { status, period, relative, geography } = this.props.globalFilters;
            const sortedByObj = getSortedBy(status, period, relative);
            this.setState({ sortedBy: sortedByObj.sortedBy, status, period, relative });

            if (geography) {
                scrollToActive()
            }
        }

        if (this.props.globalFilters.geography !== this.state.geography && this.props.globalFilters.geography) {
            this.setState({geography: this.props.globalFilters.geography});
        }
    }

    makeList(data = []) {
        const { sortedBy } = this.state;

        const userLang = navigator.language;

        return sortByParameter(data, sortParameters[sortedBy]).map((item, index) => {
            const { Country, flag } = item;
            const { geography } = this.props.globalFilters;
            let amount = item[sortParameters[sortedBy]];
            amount = new Intl.NumberFormat(userLang, { minimumFractionDigits: 0, maximumFractionDigits: 2}).format(amount);

            return (
                <tr className={`country-list-item ${geography === Country ? 'country-list-item_selected' : ''}`} key={index} onClick={() => this.onCountryClick(Country)}>
                    <td><img className="country-list-item-flag" loading="lazy" src={flag} alt="flag"/></td>
                    <td><span className="country-list-item-country">{Country} </span></td>
                    <td>{amount}</td>
                </tr>
            )
        })
    }

    onInputChange = (e) => {
        this.setState({filterText: e.target.value});
    };

    onCountryClick = (Country) => {
        this.setState({geography: Country});
        this.props.handleClickOnCountry(Country);
    };

    handleFullSize() {
        this.setState({
          expanded: !this.state.expanded,
          minimize: !this.state.minimize,
        })
      };
    
      handleMinimize() {
        this.setState({
          fullSize: !this.state.fullSize,
          maximize: true,
          minimize: false
        })
      }
    
      handleMaximize = () => {
    
        this.setState({
          fullSize: !this.state.fullSize,
          maximize: false,
          minimize: true
        })
      }

    initKeyboard() {
        const searchInput = document.getElementById("searсh");
        if (searchInput) {
            window.VKeyboard.init(searchInput);
        }
    }

    openKeyboard() {
       const searchInput = document.getElementById("searсh");
        if (searchInput) {
            window.VKeyboard.keyboardToggle();
        }
    }

    render() {
        const { summaries = [], flags = [] } = this.props;
        const { filterText } = this.state;

        let data = summaries.map((country) => {
            const [geography] = flags.filter(item => item.name === country.Country);
            const population = geography ? geography.population : missedPopulations[country.Country];

            return {
                ...country,
                flag: geography ? geography.flag : missedFlags[country.Country],
                population,
                TotalConfirmedPerPopulation: ((country.TotalConfirmed * 100000) / population),
                NewConfirmedPerPopulation: ((country.NewConfirmed * 100000) / population),
                TotalDeathsPerPopulation: ((country.TotalDeaths * 100000) / population),
                NewDeathsPerPopulation: ((country.NewDeaths * 100000) / population),
                TotalRecoveredPerPopulation: ((country.TotalRecovered * 100000) / population),
                NewRecoveredPerPopulation: ((country.NewRecovered * 100000) / population),
            }
        });


        if (filterText !== '') {
            data = data.filter(el => el['Country'].toLowerCase().includes(filterText.toLowerCase()))
        }

        let listItems = this.makeList(data);

        const options = {'status': true, 'relative': true, 'period': true};

        return (
          <Draggable position={this.state.expanded ? defaultPosition : null} onMouseDown={this.props.handleOnMouseUp}>
              <div
                ref={this.containerRef}
                className={`country-list-container ${this.state.expanded ? 'expanded' : ''} ${!this.state.fullSize ? 'min-size' : ''}`}
              >
                  <div className="controls">
                      <div className="title">Countries</div>

                    <MaximizeIcon className="controls-icons" onClick={() => this.handleMaximize()} style={{ display: this.state.maximize ? 'inline-block' : 'none' }} />

                    <MinimizeIcon className="controls-icons" onClick={() => this.handleMinimize()} style={{ display: this.state.minimize ? 'inline-block' : 'none' }} />

                    <Expand className="controls-icons" onClick={() =>this.handleFullSize()} style={{ display: this.state.fullSize ? 'inline-block' : 'none' }} />

                  </div>
                  {
                      this.state.fullSize ? (
                        <div className="block-inner">
                            <div className="border-stroke">
                                <div className="filters">
                                    <Filters globalFilters={this.props.globalFilters}
                                             updateFilters={this.props.updateFilters} options={options}/>
                                </div>
                                <div className="row-search">
                                    <input onChange={this.onInputChange} onFocus={this.onInputChange}
                                           placeholder="Search..." type="text" id="searсh"/>
                                    <div className="v-keyboard">
                                        <VKeyboard className="controls-icons" onClick={this.openKeyboard}/></div>
                                </div>
                            </div>
                            <div ref={this.listRef} className="country-list">

                                <Scrollbars style={{width: 'auto', height: this.state.expanded ? '80vh' : '50vh'}}>
                                    <table>
                                        <tbody ref={this.tbodyRef}>
                                    {listItems}
                                        </tbody>
                                    </table>
                                </Scrollbars>

                            </div>
                        </div>
                      ) : null
                  }
              </div>
          </Draggable>
        );
    }
}

export default CountryList;
