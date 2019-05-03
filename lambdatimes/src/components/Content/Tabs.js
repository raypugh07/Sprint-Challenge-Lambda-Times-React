import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((x, y)  => (
            <Tab key={y} tab={x} selectTabHandler={props.changeSelected} selectedTab={props.selectedTab} />
          ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array  
};

export default Tabs;
