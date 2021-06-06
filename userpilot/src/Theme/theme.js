import { createMuiTheme } from "@material-ui/core";

    const theme = createMuiTheme({
        spacing: 4,
        palette: {
            primary: {
                main: '#E5E5E5',
                sidebar:'#363740',
                ticket:'#FFFFFF',
                item:'#A4A6B3'
            }},
             secondary:{
                    color:"red"
                },
             header:{
                    spacing: 4,
                },
             });
    export default theme;