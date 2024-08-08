import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './style.scss';
import App from './components/app';

const root = createRoot(document.getElementById('main'));
root.render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
