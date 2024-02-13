import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const Layout: React.FC<{ children: any }> = (props) => {
  return <>
    <Header />
    {props.children}
    <Footer />
  </>;
};

export default Layout;
