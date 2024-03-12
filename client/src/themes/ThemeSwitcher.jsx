import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Check if a theme preference is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    // If a theme preference is stored, use it otherwise, default to "light"
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Update the class on the document element based on the theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save the theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between "light" and "dark" themes
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className=" bg-white dark:bg-black">
    <button onClick={toggleTheme} className='bg-emerald-500 dark:bg-emerald-900'>
      Toggle Theme
    </button>
    </div>
  );
};

export default ThemeSwitcher;