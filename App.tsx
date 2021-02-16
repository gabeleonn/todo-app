import React from 'react';

import GlobalStyles from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <GlobalStyles />
    </>
  );
};

export default App;
