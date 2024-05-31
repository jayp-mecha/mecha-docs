import React from "react";
import Icon from "../icons/Icons";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:max-w-[1300px] mx-auto p-5 md:p-0">
      <nav className="flex flex-row justify-between items-center py-5">
        <img src="img/Logo.svg" />
        <ul className="md:flex flex-row items-center gap-6 font-medium text-white hidden">
          <li className="flex flex-row gap-1 items-center">
            <a href="#">Console</a>
            <Icon name="url" />
          </li>
          <li className="flex flex-row gap-1 items-center">
            <a href="#">Community</a>
            <Icon name="url" />
          </li>
          <li className="flex flex-row gap-1 items-center">
            <Icon name="github" height="20px" width="20px" />
            <a href="#">Github</a>
          </li>
          <div className="flex flex-row gap-3 items-center">
            <li className="flex flex-row gap-1 items-center">
              <a href="#" className="p-1 border-2 rounded-lg border-white">
                <Icon name="discord" height="20px" width="20px" />
              </a>
            </li>
            <li className="flex flex-row gap-1 items-center">
              <a href="#" className="p-1 border-2 rounded-lg border-white">
                <Icon name="twitter" height="20px" width="20px" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
