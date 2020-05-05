import React from 'react';
import './error-indicator.css';
import icon from './error.png'

const ErrorIndicator = () => {
    return (
      <div className="error-indicator">
        <img src={icon} alt="error icon" className="error-img"/>
        <span className="boom">OOOPS!</span>
        <span>
          something has gone terribly wrong
        </span>
        <span>
          (please refresh page)
        </span>
      </div>
    );
  };
  
  export default ErrorIndicator;