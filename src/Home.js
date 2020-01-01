
import React from "react";
import {MainSection} from './MainSection'
import img from "./cart.png"
import styled from "styled-components";




const AppImg = styled.img` 
    height: 100px;
    pointer-events: none;
`



export function Home() {
  return (
    <MainSection heading="Home Page">
      <blockquote>This is our new shopping site</blockquote> 
      <AppImg src={img} alt="img" />
    </MainSection>
  );
}

