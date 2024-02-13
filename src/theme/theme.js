import { createTheme } from "@mui/material/styles";
import "./fonts/fonts.css";

let Theme = createTheme({
    palette: {
        primary: {
            main: '#ff6cb1',
        },
        secondary: {
            main: '#6cddff',
        },
        salmon: {
            main: '#ff6c6c',
            light: '#ffa6a6',
            dark: '#e1634d',

        }
    },
    typography: {
        fontFamily: ['Roboto Slab',],
        h1: {
            fontFamily: 'Honk',
            fontSize: '72pt',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        h2: {
            fontFamily: 'Roboto Slab',
            fontWeight: '900',
            fontSize: '32pt',
            textAlign: 'center',
            margin: '5px',
            verticalAlign: 'middle',
            justifyContent: 'center',
            alignItems: 'center',
        },
        h3: {
            fontFamily: 'Roboto Slab',
            fontWeight: '700',
            fontSize: '24pt',
            textAlign: 'center',
            margin: '5px',
            verticalAlign: 'middle',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            fontFamily: 'Orbitron',
            fontWeight: '900',
        },
    },
});

export default Theme;