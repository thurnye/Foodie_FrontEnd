import React from 'react';
import ReactDOM from 'react-dom';
import PrivateGroupInfo from './PrivateGroupInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrivateGroupInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});