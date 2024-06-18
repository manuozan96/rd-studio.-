import React from "react";
import Footer from "./Footer";

const FooterLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default FooterLayout;
