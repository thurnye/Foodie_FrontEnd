import React from 'react';
import ReactDOM from 'react-dom';
import ImageUploadOptions from './ImageUploadOptions';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageUploadOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});