import React from 'react';

import { ThemeProvider } from './Theme';
import { TodoProvider } from './Todos';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
};

export default Providers;
