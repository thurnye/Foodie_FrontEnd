import React from 'react';
import ReactDOM from 'react-dom';
import SingleEventContainer from './SingleEventContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleEventContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});