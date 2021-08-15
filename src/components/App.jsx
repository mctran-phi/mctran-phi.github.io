import React from 'react';
import Nav from './Nav/Nav.jsx';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import Project from './Project/Project.jsx';
import Contact from './Contact/Contact.jsx';
import { Box } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import useStyles from './useStyles.js';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

export default function App() {
  const aboutRef = React.createRef();
  const projectRef = React.createRef();
  const contactRef = React.createRef();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box pb={10} className={classes.container}>
        <Box className={classes.components}>
          <Header/>
          <Nav
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}/>
          <Box className={classes.portfolio}>
            <About ref={aboutRef}/>
            <Project ref={projectRef}/>
            <Contact ref={contactRef}/>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
