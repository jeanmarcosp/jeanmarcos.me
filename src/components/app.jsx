import React from 'react';
import {
  BrowserRouter, Routes, Route, HashRouter,
} from 'react-router-dom';
import NavBar from './nav-bar';
import Landing from './landing';
import '@mantine/core/styles.css';
import Footer from './footer';
import Projects from './projects';

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
