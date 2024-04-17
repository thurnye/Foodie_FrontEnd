import React from 'react';
import ReactDOM from 'react-dom';
import ModalFeedBack from './ModalFeedBack';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalFeedBack />, div);
  ReactDOM.unmountComponentAtNode(div);
});