import React from 'react';
import ReactDOM from 'react-dom';
import MostViewedAndRated from './MostViewedAndRated';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MostViewedAndRated />, div);
  ReactDOM.unmountComponentAtNode(div);
});