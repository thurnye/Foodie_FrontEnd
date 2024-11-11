import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedChefsAndBloggers from './FeaturedChefsAndBloggers';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeaturedChefsAndBloggers />, div);
  ReactDOM.unmountComponentAtNode(div);
});