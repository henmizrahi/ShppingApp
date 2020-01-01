
import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from './logo.png';
import {common} from './common.js'


const AppLogo = styled.img` 
    height: 85px;
    pointer-events: none;
`



export const HeaderSection = styled.header`
${common}
display: flex;
justify-content: space-between;
align-items: center;
h1 {
  margin: 0;
}
`;
// background-color: #f4ceec

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      
    }
  }
`;


export function Header({ children }) {
    return (
      <HeaderSection>
        { <h1>{children}</h1> }
        <AppLogo src={logo} alt="logo" />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to = "/myorders">MyOrders</Link>
        </Nav>
      </HeaderSection>
    );
  }