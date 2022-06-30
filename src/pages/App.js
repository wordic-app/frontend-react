import React, { useState } from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyles from 'theme/GlobalStyles';
import lightTheme from 'theme/lightTheme';
import darkTheme from 'theme/darkTheme';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <div>
        <Button
          style={{ display: 'none !important' }}
          onClick={() => setDarkMode(!darkMode)}
        >
          MODE
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
