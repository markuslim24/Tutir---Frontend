//imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { initializeAuthState } from "../store/slice/auth";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/muiTheme";

//Global Main
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(initializeAuthState());
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
