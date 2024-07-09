import React from 'react';
import ReactDOM from 'react-dom';
import SingleGroupContainer from './SingleGroupContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleGroupContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});