import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Container from './components/Container';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyles } from './styles/GlobalStyles.styles';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleNightMode = () => theme === 'dark' ? setTheme('light') : setTheme('dark');


  return (
    <Fragment>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <Container onToggle={toggleNightMode}/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
