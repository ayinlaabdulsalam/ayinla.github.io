import React from 'react';
import styled from 'styled-components';

const Section = styled.section `
  height: 85.7%;
  width: 65%;
  position:fixed;
  left: 25%;
  top: 7.1%;
  z-index: 2;
  border: 1px solid #d4d4d4;
`;

const CenterBox = () => <Section />;
export default CenterBox;
