import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles.js';

const About = React.forwardRef((props, ref) => {
  const AboutClass = () => {
    const classes = useStyles();

    return (
      <Box pt={3} pb={3} ref={ref}>
        <Typography component='h1' variant='h5' className={classes.title} align='center'>
          Hello, my name is Minh Tran.
        </Typography>
        <Box p={2}>
          <Box p={2}>
            <Typography>
              My journey began in college where I first learned how to program ‘Hello World’ in C++. I found myself enjoying the problem-solving aspect of computer science as I continued to solve coding challenges and learn more about data structures and algorithms. Post-graduation, I transitioned into Javascript as I was intrigued in building full stack applications. Designing and implementing UI/UX functionalities has been my passion since then.
            </Typography>
          </Box>
          <Box p={2}>
            <Typography className={classes.title}>Education</Typography>
            <Typography className={classes.edu}>
              Hack Reactor, Advance Software Engineering Immersive Program (2021)
            </Typography>
            <Typography className={classes.edu}>
              California State University East Bay, B.S. Computer Science (2020)
            </Typography>
          </Box>
          <Box p={2}>
            <Typography className={classes.title}>Skills</Typography>
            <Box display='flex'>
              <Typography className={classes.skills}>Frontend: </Typography>
              <Typography>
                React.js, Next.js, HTML, CSS, JavaScript/Typescript
              </Typography>
            </Box>
            <Box display='flex'>
              <Typography className={classes.skills}>Backend: </Typography>
              <Typography>
                Express.js, Node.js, MongoDB, PostgreSQL, MySQL, Java, C++
              </Typography>
            </Box>
            <Box display='flex'>
              <Typography className={classes.skills}>Tools and Utilities: </Typography>
              <Typography>
                  Webpack, Babel, Docker, AWS EC2, NGINX, Mocha, Chai, New Relic, jQuery, Socket.io
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return <AboutClass/>
});

export default About;
