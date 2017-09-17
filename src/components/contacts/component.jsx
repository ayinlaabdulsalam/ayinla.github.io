import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  top: 70.8%;
  position: relative;
  width: 100%;
  > ul {
	  padding: 0;
      margin: 0;
	> li {
		list-style: none;
		display: inline;
		margin-right: 3.1rem;
		font-size: 0.9rem;
		color: #8E8E8E;
	  }

	}

  > button {
	  width: 224.8px;
	  height: 45px;
	  font-size: 1.7rem;
	  margin-bottom: 3rem;
	}
`;

const Contact = props => <li href={props.contact.url}> {props.contact.name } </li>;
const Contacts = props => (
  <Div>
    <button> Hire Me </button>
    <ul> {props.contacts.map(contact => <Contact contact={contact} />)} </ul>
  </Div>
);

export default Contacts;
