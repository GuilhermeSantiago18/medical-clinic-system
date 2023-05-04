import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#95D5B2" },
    secondary: { main: "#ADB5BD" },
    background: { default: "#F8F9FA", paper: "#F8F9FA" },
  },
  typography: {
    h3: {
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
  },
  components: {
    MuiTableHead: { styleOverrides: { root: { backgroundColor: "#95D5B2" } } },
  },
});
