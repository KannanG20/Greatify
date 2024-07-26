import React, { createContext, useEffect, useState } from "react";

export const GlobalContextProvider = createContext();

function GlobalContext({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        setToggleSidebar(true);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setToggleSidebar((prev) => !prev);
    // localStorage.setItem("sideBarResize", !toggleSidebar);
  };

  return (
    <GlobalContextProvider.Provider
      value={{ toggleSidebar, setToggleSidebar, handleToggle }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
}

export default GlobalContext;
