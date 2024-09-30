import { createContext, useState } from 'react';
import { chosenTheme } from '../utils/theme';

const ThemeContext = createContext({
  theme: chosenTheme,
  setTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(chosenTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
