import { createTheme } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    type: "dark",
    // background: {
    //   // default: "#00142b"
    //   // default: "linear-gradient(90deg, #00142b, #003163)"  
    // }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: "linear-gradient(to right bottom, #00142b, #003163)" ,
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
  }
});

export default theme;
