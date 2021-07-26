/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';


export default function RandomColor({ currentColor, backgroundImage }) {

  return (
    <div style={{
      backgroundColor: currentColor,
      backgroundImage: `url(${backgroundImage})`,
      height: '500px',
      width: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>
        {currentColor} 
      </h1>
    </div>
  );
}

RandomColor.propTypes = {
  currentColor: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  generateRandomColor: PropTypes.func.isRequired
};
