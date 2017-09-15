import React from 'react';
import styled from 'styled-components';
import RightBox from './rightBox';
import CenterBox from './centerBox';
import Expertise from './expertise';
import Contacts from './contacts';

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

const Aside = styled.aside `
  width: 25%;
  height: 100%;
  background: #F4F3F3;
  position:fixed;
  padding-left: 5%;
  padding-top: 14.1%;
`;

const apps = [
  'Web Applications',
  'Back End Applications',
  'Desktop Applications',
  'Automation Bots',
  'Chrome Extensions',
  'Crawlers',
  'Scrapers',
];

const HireMe = props => <button> Hire Me </button>;

const Home = () => (

  <Outer>

    <Aside>
      <p> I AM AYINLA ABDULSALAM </p>
      <Expertise apps={apps} />
      <HireMe />
      <Contacts contacts={contacts} />
    </Aside>

    <CenterBox />

    <RightBox />

  </Outer>
);

export default Home;
