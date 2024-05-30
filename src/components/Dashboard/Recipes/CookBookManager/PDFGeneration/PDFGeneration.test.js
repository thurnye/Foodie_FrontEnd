import React from 'react';
import ReactDOM from 'react-dom';
import PdfGeneration from './PdfGeneration';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PdfGeneration />, div);
  ReactDOM.unmountComponentAtNode(div);
});