import React from 'react';
import ReactDOM from 'react-dom';
import Publish from './Publish';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Publish />, div);
  ReactDOM.unmountComponentAtNode(div);
});