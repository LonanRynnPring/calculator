import React from 'react';
import './ResultComponent.css';
export const ResultComponent = (props) => {
  return (<div className="result">
    <p>{props.result}</p>
  </div>);
};

