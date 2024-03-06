import React from 'react';
import ReactDOM from 'react-dom';
import SortableContainer from './SortableContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SortableContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});