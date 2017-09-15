import React from 'react';
import styled from 'styled-components';

const Section = styled.section `
  height: 100%;
  width: 40%;
  background: #BFBEC5;
  position : fixed;
  right: 0;
  z-index: 1;
`;

const RightBox = () => <Section />;
export default RightBox;
