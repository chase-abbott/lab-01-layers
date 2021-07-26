/* eslint-disable max-len */
import React, { Component } from 'react';
import RandomColor from './randomcolor/RandomColor';

// const colors = ['red', 'blue', 'green'];
export default class App extends Component {

state ={
  currentColor: '',
  backgroundImage: ''
}


generateRandomColor = () => {
  const newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  // const newColor = colors[Math.floor(Math.random() * 3)];
  
  this.setState(prev => {
    if(prev.currentColor === newColor) return { currentColor: '', backgroundImage: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' };
    return { currentColor: newColor, backgroundImage: '' };
  }
  );
}



render(){
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>RANDOM COLORS!!!</h1>
      <RandomColor 
        currentColor={this.state.currentColor} 
        generateRandomColor={this.generateRandomColor}
        backgroundImage={this.state.backgroundImage}/>
    </div>
  );
}
}
