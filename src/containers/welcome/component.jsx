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
  color: white;
  position:fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding-left: 105px;
  padding-top: 210px;
  > p {
	font-size: 50px;
	margin: 0;
	margin-bottom: 45px;
  }

  > span {
	font-size: 25px;
  }

`;

const Img = styled.img `
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

const HeroP = styled.p `
color:black;
position:fixed;
right: 30px;
bottom: 200px;
width: 550px;
font-size: 35px;
`;

const Hero = props => <HeroP> I am a <span> Minimalist </span> and <br /> I won't let you <span> f**k </span> things up .</HeroP>;

const HireMe = props => <button> Hire Me </button>;

const Home = () => (
  <Outer>
    <BlackHalf />
    <Img src={triangles} />
    <BlackHalf white />
    <Aside>
      <p> Ayinla <br /> Abdulsalam </p>
      <span> Trained Introvert </span>
      <Contacts contacts={contacts} />
      <Hero />
    </Aside>
  </Outer>
);

export default Home;
