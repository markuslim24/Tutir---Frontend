//imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { initializeAuthState } from "../store/slice/auth";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

//Global Main
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(initializeAuthState());
  }, []);
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;