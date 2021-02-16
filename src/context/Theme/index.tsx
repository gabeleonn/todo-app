import React, { useState, useCallback, createContext, useContext } from 'react';

interface Theme {
  color: string;
}

interface ThemeContext {
  theme: Theme;
  changeTheme(theme: string): void;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Theme>(() => {
    const theme = localStorage.getItem('@Todo:theme');
    if (theme) {
      return { ...JSON.parse(theme) };
    }
    return { color: '#999' };
  });

  const changeTheme = useCallback((theme: string): void => {
    switch (theme) {
      case 'purple':
        setData({ color: '#9677DF' });
        break;
      case 'blue':
        setData({ color: '#2C97DE' });
        break;
      case 'green':
        setData({ color: '#2DBDA8' });
        break;
      case 'red':
        setData({ color: '#E16070' });
        break;
      default:
        setData({ color: '#999' });
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: { color: data.color }, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAuth precisa ser usando dentro de um AuthProvider.');
  }

  return context;
};

export default { ThemeProvider, useTheme };
