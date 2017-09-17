import React from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import {
  injectGlobal,
} from 'styled-components';

import Welcome from './containers/welcome';
import bkg from './assets/bkg.png';

injectGlobal `
  body,html{
    margin: 0;
    padding:0;
    width: 100vw;
    height: 100vh;
    font-family: 'Work Sans', sans-serif;
  }

  body{
    background-image: url(${bkg});
    background-size: cover;
  }

`;

export default props => (

  <BrowserRouter>

    <div>
      <Route path="/" component={Welcome} />
    </div>

  </BrowserRouter>

);
