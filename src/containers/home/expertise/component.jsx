import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul `
margin: 0;
padding:0;
`;

const Li = styled.li `
list-style: none;
margin: 1rem 0;
`;
const Type = props => <Li> {props.type} </Li>;

const Expertise = props => <Ul> { props.apps.map(appType => <Type type={appType} />) } </Ul>;
export default Expertise;
