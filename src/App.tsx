import React from 'react';

import GlobalStyles from './styles/global';
import Main from './pages/Main';
import Providers from './context';

const App: React.FC = () => {
  return (
    <Providers>
      <Main />
      <GlobalStyles />
    </Providers>
  );
};

export default App;
