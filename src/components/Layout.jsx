import React from "react";
import { Header, Footer } from "../index.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden min-h-screen bg-[#0F0140] ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
