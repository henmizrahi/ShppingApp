import React from 'react';
import './App.css';
import {Header} from './header'
import {MainView} from './mainView'
import {Footer} from './footer'
import styled from "styled-components";



export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #777b7d;

`;


export function App(){
    return (
      <MainContainer>
      <Header>Shopping</Header>
        <MainView />
      <Footer name="Hen Mizrahi"/>
      </MainContainer>
    );
}



export default App;
