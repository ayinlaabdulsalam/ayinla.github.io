// @flow

import React from 'react';

import styled from 'styled-components';
import Contacts from '../../components/contacts';
import Navigation from '../../components/navigation';
import buddist from '../../assets/buddist.png';

const contacts = [{
  name: 'Github',
  url: 'https://github.com/ayinlaaji',
}, {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/ayinla/',
}, {
  name: 'Wakatime',
  url: 'https://wakatime.com/@ayinla',
}];

const Outer = styled.div `
  overflow: hidden;
  background: url(${buddist});
  background-size: 100%;
  width: 100vw;
  height 100vh;
`;

const Cover = styled.div `
  background: white;
  position: absolute;
  top: 100%;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Aside = styled.aside `
  height: 100%;
  width: 28.3%;
  color: white;
  position:fixed;
  top: 0;
  left: 0;
  margin-left: 4.9%;
  box-sizing: border-box;
`;

const HeroP = styled.p `
  color:black;
  position:absolute;
  right: 0;
  bottom: 35%;
  width: 45%;
  font-size: 1.2rem;
  h3{
    font-size: 3rem;
  }
  > span {
      color: #4133a2;
      font-size: 2rem;
    }
`;

const Name = styled.div `
  width: 100%;
  position: relative;
  top: 10%;
  > p {
      font-size: 2rem;
      margin: 0;
      margin-bottom: 1.4%;
    }

  > span {
      font-size: 1rem;
      color: #A7A7A7;
      opacity: 0.66;
  }
`;

const Slant = styled.div `
  float: left;
  height: 100%;
  position: absolute;
  background : ${props => props.white ? 'white' : 'black'};
  left : ${props => props.white ? '68%' : '4%'};
  opacity: ${props => props.white ? '1' : '0.75'};
  width: ${props => props.white ? '100%' : '60%'};
  transform: rotate(20deg) ;
  transform-origin: right top;
  display:block;
  height: 200%;
`;

const Hero = props => {

  return (<HeroP>
    <h3> Hi,</h3> <br />
    I'm a <span> Functional </span> programmer at heart, but I enjoy <span> OOP </span> also. <br />
    I write <span> vanilla </span> code. <br />
    I enjoy tackling <span> Complex </span> problems. <br/>
    I am mostly interested in <span> Node</span>,<span>  Javascript</span>,<span>  React</span> &amp; <span>  Redux</span>.
    </HeroP>)

}

const nav = [{
  name: 'Blog',
  href: "https://medium.com/@ayinlaabdulsalam",
  target: 'blank'
}];

const Home = () => (
  <Outer >
  <Slant />
  <Slant white />
  <Aside>
  <Name>
  <p>
  AYINLA
  <br />
  ABDULSALAM
  </p>
  <span> Software Engineer </span>
  </Name>
  <Contacts contacts={contacts} />
  </Aside>
  <Navigation urls={nav}/>
  <Hero />
  <Cover />
  </Outer>
);

export default Home;
