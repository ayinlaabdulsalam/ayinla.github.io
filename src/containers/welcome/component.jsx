import React from 'react';

import styled from 'styled-components';
import Contacts from '../../components/contacts';
import triangle from '../../assets/triangles.svg';

const contacts = [{
  name: 'Github',
  url: 'https://github.com/ayinlaaji',
}, {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/ayinla/',
}, {
  name: 'WakaTime',
  url: 'https://www.linkedin.com/in/ayinla/',
}];

const Outer = styled.div `
  width: 100vw;
  height 100vh;
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

const Img = styled.img `
  float: right;
  height: 100%;
`;

const HeroP = styled.p `
  color:black;
  position:fixed;
  right: 30px;
  bottom: 200px;
  width: 550px;
  font-size: 2.3rem;
`;

const Name = styled.div `
  width: 100%;
  position: relative;
  top: 18.6%;
  > p {
	  font-size: 2.8rem;
	  margin: 0;
	  margin-bottom: 1.4%;
    }

  > span {
	  font-size: 1.7rem;
	  color: #A7A7A7;
	  opacity: 0.66;
  }
`;

const Hero = props => (<HeroP> I am a <span> Minimalist </span> and
  <br />
  I won't let you <span> f**k </span> things up .
</HeroP>);

const Home = () => (
  <Outer>
    <Img src={triangle} />
    <Aside>
      <Name>
        <p>
		AYINLA
		<br />
		ABDULSALAM
	  </p>
        <span> Trained Introvert </span>
      </Name>
      <Contacts contacts={contacts} />
      <Hero />
    </Aside>
  </Outer>
);

export default Home;
