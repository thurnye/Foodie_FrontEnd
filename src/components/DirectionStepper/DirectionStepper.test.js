import React from 'react';
import ReactDOM from 'react-dom';
import DirectionStepper from './DirectionStepper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DirectionStepper />, div);
  ReactDOM.unmountComponentAtNode(div);
});