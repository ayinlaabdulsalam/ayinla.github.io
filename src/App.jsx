import React from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import {
  injectGlobal,
} from 'styled-components';

import Home from './containers/home';

injectGlobal `
    body,html{
    margin: 0;
    padding:0;
    background: #F4F3F3;
    width: 100vw;
    height: 100vh;
}
`;

export default props => (

  <BrowserRouter>

    <div>
      <Route path="/" component={Home} />
    </div>

  </BrowserRouter>

);
