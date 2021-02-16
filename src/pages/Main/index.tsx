import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

import Header from '../../components/Header';
import TodosList from '../../components/TodosList';
import { useTheme } from '../../context/Theme';

const Main: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <TodosList />
      </Container>
    </ThemeProvider>
  );
};

export default Main;
