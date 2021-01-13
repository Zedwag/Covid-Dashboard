import Map from './map';

const WorldMap = ({ summaries, handleClickOnCountry, globalFilters, updateFilters, handleOnMouseUp }) => {
  return (
    <div className="world-map-container">
      <Map summaries={summaries} handleClickOnCountry={handleClickOnCountry} globalFilters={globalFilters} updateFilters={updateFilters} handleOnMouseUp={handleOnMouseUp}/>
    </div>
  );
};

export default WorldMap;
