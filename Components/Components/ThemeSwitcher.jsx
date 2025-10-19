'use client';

import { useStore } from '../../app/stores/useStore';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useStore();

  useEffect(() => {
    // Set initial theme on mount and when theme changes
    document.documentElement.setAttribute('data-theme', theme);
    console.log('Theme changed to:', theme);
    // Force a re-render by updating body class as well
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const themes = [
    { key: 'current', label: 'Current', color: '#FC7000' },
    { key: 'light', label: 'Light', color: '#ffffff' },
    { key: 'dark', label: 'Dark', color: '#0a0a0a' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      right: '20px',
      zIndex: 1001,
      display: 'flex',
      gap: '10px',
      background: 'var(--card-bg)',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid var(--border)',
      boxShadow: '0 4px 12px var(--shadow)',
    }}>
      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => setTheme(t.key)}
          style={{
            background: theme === t.key ? 'var(--primary)' : 'var(--button-bg)',
            border: `2px solid var(--primary)`,
            color: theme === t.key ? 'var(--button-hover-text)' : 'var(--primary)',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
