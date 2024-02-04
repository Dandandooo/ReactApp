import React from 'react';
import { Toolbar, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledAppBar = styled(AppBar).attrs({
    position: "sticky",
})``;

const StyledButton = styled(Button).attrs({
  variant: "contained",
})``;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
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