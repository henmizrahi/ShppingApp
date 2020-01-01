
import React from 'react';
import styled from "styled-components";
import {common} from './common.js'


export const FooterSection = styled.footer`
${common}
  height: 6vmin;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;


export function Footer({name}){
return (
    <FooterSection>
    <small>
        &copy; Copyright , {name}
    </small>
    </FooterSection>
);
}