import React, { useState } from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyles from 'theme/GlobalStyles';
import lightTheme from 'theme/lightTheme';
import darkTheme from 'theme/darkTheme';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import Typography from 'components/atoms/Typography/Typography';

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
        <Button onClick={() => setDarkMode(!darkMode)}>MODE</Button>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consectetur dignissimos ex fuga maiores nesciunt soluta totam
          voluptates. Accusantium architecto ducimus earum facere facilis iure
          maxime molestiae, officiis voluptas voluptates.
        </Typography>
        <Button color='warning'>TEST</Button>
        <Typography variant='h1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consectetur dignissimos ex fuga maiores nesciunt soluta totam
          voluptates. Accusantium architecto ducimus earum facere facilis iure
          maxime molestiae, officiis voluptas voluptates.
        </Typography>
        <Button color='info' variant='outlined'>
          INFO
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
