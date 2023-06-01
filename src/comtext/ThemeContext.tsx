'use client';

import React, { createContext, useState } from 'react';

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext({
  mode: 'dark',
  toggle: (): void => {},
});

export default function ThemeProvider({ children }: IThemeProvider) {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
