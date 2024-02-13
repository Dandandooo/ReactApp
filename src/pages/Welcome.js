import React from 'react';
import {Typography} from '@mui/material';
import { Header } from "../components";
import styled from "styled-components";

const StyledWelcome = styled(Typography).attrs({
    fontSize: "min(20vw, 50vh)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "86vh",
    fontFamily: "Honk",
})``

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