import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider(props) {
  const theme = {
    background: "#e3edf7",
    primary: "#31456a",
    secondary: "#b8cde1",
    tertiary: "#783da9",
    warning: "#eb5858",
    yellow: "#FDD738",
    orange: "#FD9738",
    gradientA: ["#ff9e35", "#ff046b"],
    gradientB: ["#e23dae", "#66b6f1"],
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
