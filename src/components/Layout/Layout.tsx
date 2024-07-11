import React from "react";
import Icon from "../Icons/Icons";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:max-w-[1300px] mx-auto p-5 md:p-0">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
