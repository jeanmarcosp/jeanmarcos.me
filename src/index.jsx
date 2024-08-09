import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme, rem } from '@mantine/core';
import './style.scss';
import App from './components/app';

const root = createRoot(document.getElementById('main'));

const theme = createTheme({
  fontSizes: {
    xl: rem(80),
  },
  lineHeights: {
    xs: '1.1',
  },
});

root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
);
