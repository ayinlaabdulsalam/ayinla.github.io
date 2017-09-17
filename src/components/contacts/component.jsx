import React from 'react';
import styled from 'styled-components';

const Link = styled.a `
  margin-right: 4%;
`;

const Button = styled.button `
height: 45px;
margin-bottom:45px;
width: 224.8px;
`;
const Div = styled.div `position: absolute; bottom: 3%;`;
const HireMe = props => <Button> Hire Me </Button>;
const Contact = props => <Link> {props.contact.name } </Link>;
const Contacts = props => <Div> <HireMe /> <div> {props.contacts.map(contact => <Contact contact={contact} />)} </div> </Div>;

export default Contacts;
