// @flow

import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  right: 5%;
  top: 2%;
  width: 40%;

  div {
    float: right;
    width: 20%;
    height: 2rem;
    text-align: center;
    background: black;
    cursor: pointer;
    a {
      width: 100%;
      padding: 0.3rem 1.9rem;
      line-height: 2rem;
      color: white;
      text-decoration: none;
    }
  }
`;
const Navigation = props => {
  return (
    <Nav>
      {props.urls.map(url => {
        return (
          <div>
            {" "}
            <a target={url.target} href={url.href}>
              {" "}
              {url.name}{" "}
            </a>{" "}
          </div>
        );
      })}
    </Nav>
  );
};

export default Navigation;
