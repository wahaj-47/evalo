import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider(props) {
  const theme = {
    background: "#e3edf7",
    primary: "#31456a",
    secondary: "#b8cde1",
    tertiary: "#783da9",
    warning: "#eb5858",
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
