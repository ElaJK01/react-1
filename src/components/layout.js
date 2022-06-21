import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="navigationWrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
