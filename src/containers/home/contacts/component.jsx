import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
width: 10 rem;
height: 2 rem;
background: white;
border: 1 px solid black;
`;

const Contact = props => <Button> {props.contact.name } </Button>;
const Contacts = props => <div> {props.contacts.map(contact => <Contact contact={contact} />)} </div>;

export default Contacts;
