import { useCallback, useState } from 'react';

export const useTheme = (initialVal = true) => {
  const [isDark, setIsDark] = useState(initialVal);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
};
