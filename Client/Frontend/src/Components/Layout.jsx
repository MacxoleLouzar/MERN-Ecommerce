import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div id="detail">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
