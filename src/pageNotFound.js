
import React from "react"
import {UseRedirect} from "./hook/countRedirect" 
import {MainSection} from './MainSection'


export function PageNotFound(){

    const ttr = UseRedirect("/");

    return(
        <MainSection heading={`Page not found :(`}>
            <h3>Redirecting to home page in {ttr}...</h3>
        </MainSection>
    );

}