import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Navbar>
          <Box component="main">
        <Hero />
        <About />
        <Projects />
            <Skills />
            <Resume />
        <Contact />
          </Box>
        </Navbar>
      </Box>
    </ThemeProvider>
  );
};

export default App; 