import React, { useState } from 'react';
import Draggable from 'react-draggable';
import CovidChart from './chart';

import { ReactComponent as MinimizeIcon } from "../../icons/small.svg";
import { ReactComponent as MaximizeIcon } from "../../icons/plus.svg";
import { ReactComponent as Expand } from "../../icons/expand.svg";

import Filters from '../filters';

const Graph = ({ dataWorld, globalFilters, updateFilters, dataForCountry, handleOnMouseUp }) => {

  const [expanded, setExpanded] = useState(false);
  const [fullSize, setFullSize] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [maximize, setMaximize] = useState(false);

  const [compare, setCompare] = useState(false);
  const defaultPosition = { x: 0, y: 0 };


  const handleToggleCompare = () => {
    setCompare(!compare);
  };

  const onCheckChange = (e) => {
    if (e.target.checked) {
      updateFilters({ world: true });
    } else {
      updateFilters({ world: false });
      if (dataForCountry && globalFilters.geography) {
        dataForCountry(globalFilters.geography);
      } else {
        dataForCountry('Belarus');
      }
    }
  };

  const handleFullSize = () => {
    setExpanded(!expanded);
    setMinimize(!minimize);
  };

  const handleMinimize = () => {
    setFullSize(!fullSize)
    setMaximize(true)
    setMinimize(false)

  }

  const handleMaximize = () => {
    setFullSize(!fullSize)
    setMaximize(false)
    setMinimize(true)
  }

  const options = { 'status': true, 'relative': true };

  return (
    <Draggable position={expanded ? defaultPosition : null} onMouseDown={handleOnMouseUp}>
      <div className={`graph-wrapper ${expanded ? 'expanded' : ''}`}>
        <div className="controls">
          <div className="title">Chart</div>

          <MaximizeIcon className="controls-icons" onClick={handleMaximize} style={{ display: maximize ? 'inline-block' : 'none' }} />

          <MinimizeIcon className="controls-icons" onClick={handleMinimize} style={{ display: minimize ? 'inline-block' : 'none' }} />

          <Expand className="controls-icons" onClick={handleFullSize} style={{ display: fullSize ? 'inline-block' : 'none' }} />

        </div>
        {
          fullSize ? (
            <div className="block-inner">
              <h4>{globalFilters.world ? 'World' : globalFilters.geography}</h4>
              <div className="border-stroke">
                <div className="filters">
                  <Filters globalFilters={globalFilters} updateFilters={updateFilters} dataForCountry={dataForCountry} options={options} />
                  <div className="adv-filters">
                    <div>
                      <input
                        type="checkbox"
                        name="world"
                        value=""
                        onChange={onCheckChange}
                        checked={globalFilters.world === true}
                      />
                      <label htmlFor="world">World</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="compare"
                        name="compare"
                        value="1"
                        onChange={handleToggleCompare}
                      />
                      <label htmlFor="compare">Compare</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <CovidChart dataWorld={dataWorld} status={globalFilters.status} compare={compare} />
              </div>
            </div>
          ) : null
        }
      </div>
    </Draggable>
  );
};

export default React.memo(Graph);
