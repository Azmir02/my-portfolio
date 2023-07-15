import React from "react";
import Menubar from "./navbar/Menubar";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
