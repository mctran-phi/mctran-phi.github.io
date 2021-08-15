import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Email, LinkedIn, GitHub } from '@material-ui/icons'
import emailjs, { init } from 'emailjs-com';
import { serviceId, templateId, userId } from '../../service.js';
import ContactForm from './ContactForm/ContactForm.jsx';
import useStyles from './useStyles.js';
init(userId);

const Contact = React.forwardRef((props, ref) => {
  const ContactClass = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const classes = useStyles();

    const handleSubmit = (data) => {
      const { name, email, message } = data;
      sendMessage(name, email, message);
    };

    const sendMessage = (name, email, message) => {
      emailjs.send(serviceId, templateId, {
        from_name: name,
        reply_to: email,
        message: message
      }).then(res => setHasSubmitted(prev => !prev))
        .catch(err => console.error(err));
    };

    return (
      <Box pb={3} pt={3} ref={ref} className={classes.root}>
        <Grid container xs={12} className={classes.container} >
          <Grid item xs={4} className={classes.contact}>
            <Typography component='h1' variant='h5' className={classes.title}>Contact</Typography>
            <Box mt={2} display='flex' flexWrap='wrap' justifyContent='center'>
              <Email className={classes.image}/>
              <Typography className={classes.email}>pctran98@gmail.com</Typography>
            </Box>
            <Box mt={2} display='flex' flexWrap='wrap' justifyContent='space-evenly'>
            <a rel='noreferrer' href='https://www.linkedin.com/in/minhctran/' target='_blank' className={classes.link}>
              <LinkedIn className={classes.image}/>
            </a>
            <a rel='noreferrer' href='https://github.com/mctran-phi' target='_blank' className={classes.link}>
              <GitHub className={classes.image}/>
            </a>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <ContactForm handleSubmit={handleSubmit} hasSubmitted={hasSubmitted}/>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <ContactClass/>
});

export default Contact;
