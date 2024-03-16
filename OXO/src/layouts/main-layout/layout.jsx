import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
