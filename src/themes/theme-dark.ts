import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#172026",
    },
    primary: {
      main: "#DAFFEF",
    },
    secondary: {
      main: "#2B3C45",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps:{
        elevation:0
      },
      styleOverrides: {
        root: {
          backgroundColor: "#2B3C45",
        },
      },
    },
    MuiCard:{
      styleOverrides: {
        root: {
          backgroundColor: "#2B3C45",
        },
      },
    }
  },
});
