import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme, rem } from '@mantine/core';
import './style.scss';
import App from './components/app';

const theme = createTheme({
  fontSizes: {
    xl: rem(80),
  },
  lineHeights: {
    xs: '1.1',
  },
});

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>,
  </React.StrictMode>,
);
