// @flow

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  bottom: 3%;
  position: absolute;
  width: 100%;

  > div {
    min-width: 70%;
    padding: 0;
    margin: 0;

    > a {
      text-decoration: none;
      display: inline;
      margin-right: 10%;
      font-size: 0.9rem;
      color: #d8d8d8;
      cursor: pointer;
    }
  }

  > button {
    width: 50%;
    height: 45px;
    font-size: 1rem;
    margin-bottom: 3rem;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #525252;
    }
  }
`;

const Contact = props => (
  <a target="_blank" href={props.contact.url}>
    {" "}
    {props.contact.name}{" "}
  </a>
);

const Contacts = props => (
  <Div>
    <button>
      {" "}
      <a href="mailto:ayinlaabdulsalam@gmail.com"> Contact Me </a>{" "}
    </button>
    <div>
      {props.contacts.map(contact => (
        <Contact key={contact.name} contact={contact} />
      ))}
    </div>
  </Div>
);

export default Contacts;
