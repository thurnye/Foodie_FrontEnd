import React from 'react';
import ReactDOM from 'react-dom';
import BackToTop from './BackToTop';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackToTop />, div);
  ReactDOM.unmountComponentAtNode(div);
});