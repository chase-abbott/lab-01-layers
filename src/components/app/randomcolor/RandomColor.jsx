/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


export default function RandomColor({ currentColor, backgroundImage, generateRandomColor }) {

  useEffect(() => {
    setTimeout(generateRandomColor, 1000);
  }, [currentColor]);

  return (
    <div style={{
      backgroundColor: currentColor,
      backgroundImage,
      height: '200px',
      width: '200px',
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
  currentColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  generateRandomColor: PropTypes.func.isRequired
};
