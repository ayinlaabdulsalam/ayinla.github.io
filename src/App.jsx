// @flow

import React from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import {
  injectGlobal,
} from 'styled-components';

import Welcome from './containers/welcome';

injectGlobal `
  body, html{
    margin: 0;
    padding:0;
    overflow: hidden;
  }

  @font-face: {
    src: url('assets/font.ttf');
    font-family: 'Raleway', sans-serif;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  *{
  box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    height: 100vh;
  }

`;

export default props => (

  <BrowserRouter>

  <div>
  <Route path="/" component={Welcome} />
  </div>

  </BrowserRouter>

);
