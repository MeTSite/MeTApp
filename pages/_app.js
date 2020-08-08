import "../components/styles.css"
import NavBarComponent from '../components/NavBarComponent.js'
import Footer from '../components/Footer.js';
import React from "react";
import App from "next/app";

export default class MeTSite extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
        <NavBarComponent />
        <Component {...pageProps} /> 
        <Footer />
      </>
    )
  }
}
