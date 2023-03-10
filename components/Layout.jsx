import React from "react";
import { useTheme } from "next-themes";

const Layout = ({ children }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return <div>{children}</div>;
};

export default Layout;
