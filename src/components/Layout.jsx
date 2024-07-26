import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { GlobalContextProvider } from "../context/GlobalContext";
import Header from "./Header";

function Layout({ children }) {
  const { toggleSidebar } = useContext(GlobalContextProvider);
  return (
    <div className="p-4 min-h-screen overflow-y-auto flex justify-end w-full bg-white">
      <Sidebar />

      <div
        className={`pl-4  h-full ${
          toggleSidebar
            ? "w-[calc(100%-70px)]"
            : "w-[calc(100%-70px)] lg:w-[calc(100%-240px)]"
        } `}
      >
        <div className="bg-gray-100 border border-gray-200 rounded-lg w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
