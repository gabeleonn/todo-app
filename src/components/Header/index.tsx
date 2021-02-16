import React, { useState } from 'react';
import { useTheme } from '../../context/Theme';

import { Color, Container, ThemeMenu } from './styles';

const Header: React.FC = () => {
  const [isOpenThemeMenu, setIsOpenThemeMenu] = useState(false);

  const { changeTheme } = useTheme();

  const toggleThemeMenu = (): void => {
    setIsOpenThemeMenu(!isOpenThemeMenu);
  };

  const handleThemeSelection = (theme: string): void => {
    changeTheme(theme);
  };

  return (
    <Container>
      <h1>Sistema</h1>
      <button type="button" onClick={toggleThemeMenu} onBlur={toggleThemeMenu}>
        ...
      </button>
      <ThemeMenu opened={isOpenThemeMenu}>
        <Color color="#9677DF" onClick={() => handleThemeSelection('purple')} />
        <Color color="#2C97DE" onClick={() => handleThemeSelection('blue')} />
        <Color color="#2DBDA8" onClick={() => handleThemeSelection('green')} />
        <Color color="#E16070" onClick={() => handleThemeSelection('red')} />
        <Color color="#999" onClick={() => handleThemeSelection('')} />
      </ThemeMenu>
    </Container>
  );
};

export default Header;
