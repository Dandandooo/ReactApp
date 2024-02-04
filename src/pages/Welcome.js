import React from 'react';
import {Typography} from '@mui/material';
import { Header } from "../components";
import styled from "styled-components";

const StyledWelcome = styled (Typography).attrs({
    component: "div",
    fontSize: "min(20vw, 50vh)",
    verticalAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "86vh",
    fontFamily: "Honk"
})`
    text-align: center;
    margin: 30px;
    vertical-align: middle;
`

function Welcome() {
    return (
        <div>
            <Header/>
            <StyledWelcome>
                Welcome
            </StyledWelcome>
        </div>
    );
}

export default Welcome;