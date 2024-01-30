import React from 'react';
import {Toolbar, AppBar, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';

let theme = createTheme({});

theme = createTheme({
    palette: {
        salmon: theme.palette.augmentColor( {
            color: {
                main: '#FF5733',
            },
            name: 'salmon',
        }),
        pink: theme.palette.augmentColor( {
            color: {
                main: '#ff6cb1',
            },
            name: 'pink',
        }),
    },
});

const AppBarTheme = "pink";


const StyledAppBar = styled(AppBar).attrs({
    position: "sticky",
    color: AppBarTheme,
})``;

const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: AppBarTheme,
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
        <ThemeProvider theme={theme}>
            <StyledAppBar>{displayDesktop()}</StyledAppBar>
        </ThemeProvider>
    </header>
  )
}

export default Header;