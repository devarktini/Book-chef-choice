"use client";

import { useEffect } from 'react';
import { useStore } from '../../app/stores/useStore';

const ThemeProvider = ({ children }) => {
  const { theme } = useStore();

  useEffect(() => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
