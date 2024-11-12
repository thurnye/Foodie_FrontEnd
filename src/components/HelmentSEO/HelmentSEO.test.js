import React from 'react';
import ReactDOM from 'react-dom';
import HelmentSeo from './HelmentSeo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelmentSeo />, div);
  ReactDOM.unmountComponentAtNode(div);
});