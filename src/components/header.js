import React from 'react';
import {Toolbar, AppBar, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";


const StyledAppBar = styled(AppBar)`
  position: sticky;
`

const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: "primary"
})`
    margin: 8px;
    background-color: #0067d6;
    color: #fff;

    &:hover {
        background-color: #0050a1;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar>
        <StyledLink to="/">
          <StyledButton>Home</StyledButton>
        </StyledLink>
        <StyledLink to="/orders">
          <StyledButton>Orders</StyledButton>
        </StyledLink>
      </Toolbar>
    );
  };

  return (
    <header>
      <StyledAppBar>{displayDesktop()}</StyledAppBar>
    </header>
  )
}

export default Header;