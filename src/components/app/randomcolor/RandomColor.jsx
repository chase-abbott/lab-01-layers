/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


export default function RandomColor({ currentColor, backgroundImage, generateRandomColor }) {

  useEffect(() => {
    const intverval = setInterval(generateRandomColor, 1000);
    return () => clearInterval(intverval);
  }, [currentColor]);

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
