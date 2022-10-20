import { useCallback, useState } from 'react';

export const useTheme = (initialVal = false) => {
  const [isDark, setIsDark] = useState(initialVal);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
};
