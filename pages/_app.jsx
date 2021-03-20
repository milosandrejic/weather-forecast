/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "../styles/global.scss";
import "../styles/css/weather-icons-wind.min.css";
import "../styles/css/weather-icons.min.css";
import {wrapper} from "../redux/store";

const WrappedApp = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
