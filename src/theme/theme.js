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
    },
    typography: {
        fontFamily: [
            'Honk',
            'Roboto Slab',
            ],
    },
});

Theme.typography.h1 = {
    fontFamily: 'Honk',
    fontSize: '72pt',
    textAlign: 'center',
    // margin: '5px',
    // verticalAlign: 'middle',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

Theme.typography.h2 = {
    fontFamily: 'Roboto Slab',
    fontWeight: '900',
    fontSize: '32pt',
    textAlign: 'center',
    margin: '5px',
    verticalAlign: 'middle',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

Theme.typography.h3 = {
    fontFamily: 'Roboto Slab',
    fontWeight: '700',
    fontSize: '24pt',
    textAlign: 'center',
    margin: '5px',
    verticalAlign: 'middle',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

Theme.typography.button = {
    fontFamily: 'Orbitron',
    fontWeight: '900',
}

export default Theme;