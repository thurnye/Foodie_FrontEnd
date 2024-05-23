import React from 'react';
import ReactDOM from 'react-dom';
import ReactSelect from './ReactSelect';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});