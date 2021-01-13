import React, {useEffect, useState} from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import {getDataCountryFromDays, getDataWorldFromDays, getSummaries} from '../../api/covid';
import {getFlags} from "../../api/flags";
import {filters} from "../../constants/filters";
import Summary from '../summary';
import CountryList from '../countryList';
import WorldMap from '../worldMap';
import Graph from '../graph';
import {getData, getDataCountries} from '../../services/calculations';
import {missedFlags, missedPopulations} from '../../constants/missed';
import '../../styles/main.scss';

const Root = () => {
    const [summaries, setSummaries] = useState({});
    const [flags, setFlags] = useState([]);
    const [dataWorldFromDays, setDataWorld] = useState([]);
    const [dataCountryFromDays, setDataCountry] = useState([]);
    const [dataAll, setDataAll] = useState([]);
    const [dataMap, setDataMap] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    const [indicatorsForFilter, updateIndicators] = useState({
        status: filters.status.confirmed,
        period: filters.period.all,
        relative: filters.relative.absolute,
        geography: filters.geography,
        world: filters.world,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const flagsResult = await getFlags();
                const summariesResult = await getSummaries();
                const dataWorldFromDaysResult = await getDataWorldFromDays();

                summariesResult.Countries = summariesResult.Countries.map(country => {
                    return {
                        ...country,
                        population: missedPopulations[country.Country] || flagsResult.find(flag => flag.name === country.Country).population,
                        flag: missedFlags[country.Country] || flagsResult.find(flag => flag.name === country.Country).flag,
                    }
                });

                setSummaries(summariesResult);
                setDataWorld(dataWorldFromDaysResult);
                setFlags(flagsResult);
                setIsLoaded(true);
            } catch (error) {
                setError('API is not available. Could you please refresh page or try a bit later.');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (indicatorsForFilter.world) {
            setDataAll(getData(dataWorldFromDays, indicatorsForFilter));
        } else if (indicatorsForFilter.geography) {
            const country = indicatorsForFilter.geography;
            const population = missedPopulations[country] || flags.find(flag => flag.name === country).population;
            setDataAll(getData(dataCountryFromDays, indicatorsForFilter, population));
        }
        //для карты
        setDataMap(getDataCountries(summaries.Countries, indicatorsForFilter));
    }, [indicatorsForFilter, summaries, dataWorldFromDays, dataCountryFromDays, flags]);

    const updateFilter = (newFilterParams) => {
        updateIndicators({
            ...indicatorsForFilter,
            ...newFilterParams
        });
    };

    const getDataForCountry = async (country) => {
        //Тут уже страна выбрана
        updateIndicators({
            ...indicatorsForFilter,
            geography: country,
            world: false
        });

        const dataCountryFromDaysResult = await getDataCountryFromDays(country);
        setDataCountry(dataCountryFromDaysResult);
    };

    const changeZIndex = (e) => {
        document.querySelectorAll('.react-draggable').forEach(el => {
            el.style.zIndex = "2";
        });
        e.target.closest('.react-draggable').style.zIndex = "6000";
    };

    return (
        <div className="main-container">
            {
                !isLoaded ? (
                    <div className="main-loader">
                        <ClockLoader
                            size={100}
                            color={"#ff3440"}
                            loading={!isLoaded}
                        />
                        {error}
                    </div>
                ) : (
                    <>
                        <CountryList
                            summaries={summaries.Countries}
                            flags={flags}
                            globalFilters={indicatorsForFilter}
                            updateFilters={updateFilter}
                            handleClickOnCountry={getDataForCountry}
                            handleOnMouseUp={changeZIndex}
                        />
                        <Summary
                            summaries={summaries.Global}
                            summariesCountries={summaries.Countries}
                            globalFilters={indicatorsForFilter}
                            updateFilters={updateFilter}
                            handleOnMouseUp={changeZIndex}
                        />
                        <WorldMap
                            summaries={dataMap}
                            globalFilters={indicatorsForFilter}
                            handleClickOnCountry={getDataForCountry}
                            updateFilters={updateFilter}
                            handleOnMouseUp={changeZIndex}
                        />
                        <Graph dataWorld={dataAll}
                               globalFilters={indicatorsForFilter}
                               updateFilters={updateFilter}
                               dataForCountry={getDataForCountry}
                               handleOnMouseUp={changeZIndex}
                        />
                        <footer className="footer">
                            <a href="https://rs.school/js/">
                                <img className="footer-image" src="https://rs.school/images/rs_school_js.svg" alt="RSSchool logo"/>
                            </a>
                            <a className="footer-link" href="https://github.com/choco-cat/">Natallia Panfilenka</a>
                            <a className="footer-link" href="https://github.com/zedwag/">Aliaksandr Kazlouski</a>
                            <a className="footer-link" href="https://github.com/kvadeck/">Nikolay Volzhenin</a>
                        </footer>
                    </>

                )
            }
        </div>
)
    ;
};

export default Root;
