import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

interface LayoutProps {
  show?: boolean;
  transparentBackground?: boolean;
  gradientBackground?: boolean;
  onlyContactoBack?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  show = true,
  transparentBackground = false,
  gradientBackground = false,
  onlyContactoBack = false,
  children,
}) => {
  let backgroundClass = ["bgPro"];
  if (!onlyContactoBack) {
    if (transparentBackground || gradientBackground) {
      backgroundClass.push("bgTransparent");
    }
    if (gradientBackground) {
      backgroundClass.push("linearGradient");
    }
  }

  return (
    <div className={`max-w-430px ${backgroundClass.join(" ")}`}>
      <Navbar />
      <header>{show && <Banner />}</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
