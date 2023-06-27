import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FCFFFD",
    },
    primary: {
      main: "#172026",
    },
    secondary: {
      main: "#64B6AC",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps:{
        elevation:0
      },
      styleOverrides: {
        root: {
          backgroundColor: "#64B6AC",
        },
      },
    },
    
  },
});
