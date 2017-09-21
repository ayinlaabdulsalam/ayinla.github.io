import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  top: 63.8%;
  position: relative;
  width: 100%;
  > div {
	  padding: 0;
      margin: 0;
	> a {
		text-decoration: none;
		display: inline;
		margin-right: 3.1rem;
		font-size: 0.9rem;
		color: #8E8E8E;
        cursor: pointer;
	  }

	}

  > button {
	  width: 224.8px;
	  height: 45px;
	  font-size: 1.7rem;
	  margin-bottom: 3rem;
      cursor: pointer;
	}
`;

const Contact = props => <a href={props.contact.url}> {props.contact.name } </a>;
const Contacts = props => (
  <Div>
    <button> Hire Me </button>
    <div> {props.contacts.map(contact => <Contact key={contact.name} contact={contact} />)} </div>
  </Div>
);

export default Contacts;
