import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Mani Parvas</h1>
          <div className="flex items-center gap-6">
            <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}