"use client";

import { useState, useEffect } from "react";
import Moon from "./assets/moon.svg";
import Sun from "./assets/sun.svg";
import Image from "next/image";

const THEME_KEY = "theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

export default function DarkModeButton() {
  const [theme, setTheme] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setTheme((prev) => {
      const newTheme = prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      setStorage(THEME_KEY, newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (getStorage(THEME_KEY)) {
      setTheme(getStorage(THEME_KEY));
    } else {
      setStorage(THEME_KEY, LIGHT_THEME);
      setTheme(LIGHT_THEME);
    }
  }, []);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={toggleDarkMode}>
      {theme === DARK_THEME ? (
        <Image src={Moon} alt="Moon" />
      ) : (
        <Image src={Sun} alt="Sun" />
      )}
    </button>
  );
}

const getStorage = (key: string): string | null => localStorage.getItem(key);
const setStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);
