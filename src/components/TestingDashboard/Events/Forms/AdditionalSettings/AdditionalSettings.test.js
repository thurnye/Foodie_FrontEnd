import React from 'react';
import ReactDOM from 'react-dom';
import AdditionalSettings from './AdditionalSettings';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdditionalSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});