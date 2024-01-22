import { AppBar, Toolbar } from "@mui/material";
import React from 'react';
import './Nav.css';

import { Link } from "react-router-dom";

export default function Header() {
    const displayDesktop = () => {
        return (
            <Toolbar>
                <Link to="/">
                    <button style={{ backgroundColor: "#0067d6", color: "#fff", padding: "10px" }}>Home</button>
                </Link>
                <Link to="/orders">
                    <button style={{ backgroundColor: "#0067d6", color: "#fff", padding: "10px" }}>Orders</button>
                </Link>
            </Toolbar>
        );
    };

    return (
        <header>
            <AppBar position="sticky">{displayDesktop()}</AppBar>
        </header>
    );
}