import React from 'react';
import ReactDOM from 'react-dom';
import BasicInfos from './BasicInfos';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicInfos />, div);
  ReactDOM.unmountComponentAtNode(div);
});