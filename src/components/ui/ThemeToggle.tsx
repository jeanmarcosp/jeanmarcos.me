import { useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // localStorage unavailable (private browsing, disabled storage) — theme still applies for this visit.
  }
}

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`text-text-muted transition-colors hover:text-accent ${className}`}
    >
      {theme === 'dark' ? <IconSun size={18} stroke={1.75} /> : <IconMoon size={18} stroke={1.75} />}
    </button>
  );
}

export default ThemeToggle;
