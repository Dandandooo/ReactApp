import {createTheme} from "@mui/material/styles";

let TableTheme = createTheme({
    // Table: {
    //
    // }
    components: {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ff6cb1",
                },
            },
        },
    },
    typography: {
        fontFamily: ['Honk']
    }
});

export default TableTheme;