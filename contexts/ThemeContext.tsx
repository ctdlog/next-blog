import { createContext } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDark: false,
  toggleTheme: () => null,
});

export default ThemeContext;
