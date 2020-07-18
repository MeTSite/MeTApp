import "../components/styles.css"

import React from "react";
import App from "next/app";

export default class MeTSite extends App {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />; 
  }
}