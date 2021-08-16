import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import congo_prime from '../../assets/congo_prime.png';
import fanime from '../../assets/fanime.gif';
import connect_four from '../../assets/connect_four.gif';
import tattoo_art from '../../assets/tattoo_art.gif';
import useStyles from './useStyles';

const Project = React.forwardRef((props, ref) => {
  const ProjectClass = () => {
    const classes = useStyles();

    return (
      <Box className={classes.container} ref={ref}>
        <Grid container xs={12} className={classes.projects}>
          <Grid item xs={6} className={classes.projectOne}>
            <Box m={5}>
              <Typography align='center' className={classes.projectTitle}>Congo Prime</Typography>
              <Box mt={3} mb={3} display='flex' justifyContent='center'>
                <img alt='Congo Prime' src={congo_prime} className={classes.image}/>
              </Box>
              <Box mt={3} mb={3}>
                <Typography component='p' align='center'>
                  An e-commerce platform composed of various microservices to improve user’s experience with product purchase and surfing.
                </Typography>
              </Box>
              <Box mt={3} mb={3} display='flex' justifyContent='space-evenly'>
                <a
                rel='noreferrer'
                href='https://github.com/mctran-phi/minh-proxy'
                target='_blank'
                className={classes.button}>
                  Github
                </a>
                <div
                className={classes.button}>
                  Unavailable
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.projectTwo}>
            <Box m={5}>
              <Typography align='center' className={classes.projectTitle}>Fanime</Typography>
              <Box mt={3} mb={3} display='flex' justifyContent='center'>
                <img alt='Fanime' src={fanime} className={classes.image}/>
              </Box>
              <Box mt={3} mb={3}>
                <Typography component='p' align='center'>
                  Anime viewing platform that provides users the most optimal experience in anime searching/browsing.
                </Typography>
              </Box>
              <Box mt={3} mb={3} display='flex' justifyContent='space-evenly'>
                <a
                rel='noreferrer'
                href='https://github.com/mctran-phi/fanime'
                target='_blank'
                className={classes.button}>
                  Github
                </a>
                <a
                rel='noreferrer'
                href='https://fanime.herokuapp.com/'
                target='_blank'
                className={classes.button}>
                  Demo
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.projectThree}>
            <Box m={5}>
              <Typography align='center' className={classes.projectTitle}>Tattoo Art</Typography>
              <Box mt={3} mb={3} display='flex' justifyContent='center'>
                <img alt='Tattoo Art' src={tattoo_art} className={classes.image}/>
              </Box>
              <Box mt={3} mb={3}>
                <Typography component='p' align='center'>
                  Tattoo Art is an application for users to create contests and compete as well as allowing users to show their work and artistic view.
                </Typography>
              </Box>
              <Box mt={3} mb={3} display='flex' justifyContent='space-evenly'>
                <a
                rel='noreferrer'
                href='https://github.com/mctran-phi/team-honey-cruller'
                target='_blank'
                className={classes.button}>
                  Github
                </a>
                <a
                rel='noreferrer'
                href='http://52.53.212.9/'
                target='_blank'
                className={classes.button}>
                  Demo
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.projectFour}>
            <Box m={5}>
              <Typography align='center' className={classes.projectTitle}>Connect Four</Typography>
              <Box mt={3} mb={3} display='flex' justifyContent='center'>
                <img alt='Connect Four' src={connect_four} className={classes.image}/>
              </Box>
              <Box mt={3} mb={3}>
                <Typography component='p' align='center'>
                  This is a connect four board game. The goal of the game is to connect 4 pieces together in a row, column, or diagonally.
                </Typography>
              </Box>
              <Box mt={3} mb={3} display='flex' justifyContent='space-evenly'>
                <a
                rel='noreferrer'
                href='https://github.com/mctran-phi/connect_four'
                target='_blank'
                className={classes.button}>
                  Github
                </a>
                <a
                rel='noreferrer'
                href='https://fourup.herokuapp.com/'
                target='_blank'
                className={classes.button}>
                  Demo
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <ProjectClass/>
});

export default Project;
