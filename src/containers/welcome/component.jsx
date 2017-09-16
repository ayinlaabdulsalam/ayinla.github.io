import React from 'react';

import styled from 'styled-components';
import Contacts from '../../components/contacts';
import triangles from '../../assets/triangles.svg';

const contacts = [{
  name: 'Github',
  url: '',
}, {
  name: 'LinkedIn',
  url: '',
}, {
  name: 'Email',
  url: '',
}];

const Outer = styled.div `
  width: 100vw;
  height 100vh;
`;

const BlackHalf = styled.div `
  height: 100%;
  display: inline-block;
  width: ${props => props.white ? '33%' : '67%'};
  background: ${props => props.white ? 'white' : 'rgba(0, 0, 0, 0.85)'}
`;

const Aside = styled.aside `
  height: 100%;
  z-index: -4;
`;

const Img = styled.img `
  z-index: 10;
  height: 100%;
  right: 32.9%;
  position:absolute;
`;

const H1 = styled.h1 `
  z-index: 10;
  color: white;
  position: fixed;
  top : 3rem;
`;
const HireMe = props => <button> Hire Me </button>;

const Home = () => (
  <Outer>
    <BlackHalf />
    <Img src={triangles} />
    <BlackHalf white />
  </Outer>
);

export default Home;
