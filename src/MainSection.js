import React from "react"
import styled from "styled-components";


export const Main = styled.main`
  padding: 20px;
  margin-bottom: 58px;
  section * {
    margin-right: 5px;
  }
`;


export function MainSection({ children, heading }) {
    return (
      <Main>
        <h2>{heading}</h2>
        {children}
      </Main>
    );
  }