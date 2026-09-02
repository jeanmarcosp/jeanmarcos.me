import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NotFound from './components/NotFound';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <div className="h-[3px] w-full bg-gradient-to-r from-accent via-accent-2 to-accent" aria-hidden="true" />
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
