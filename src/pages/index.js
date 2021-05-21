import React, { useContext } from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Main from '../components/main';
import { ThemeContext, ThemeContextProvider } from '../hookers/themeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <Layout>
          <Header />
          <Main />
        </Layout>
      </div>
    </ThemeContextProvider>
  )
};

export default App;