import React from 'react';
import { Box, Typography, TextField, Button} from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles.js';

export default function ContactForm({ handleSubmit, hasSubmitted }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          message: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          email: Yup.string()
            .email('Invalid Email')
            .required('Required'),
          message: Yup.string()
            .required('Required')
        })
      }
      onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Box className={classes.fields_container}>
            <Box className={classes.fields}>
              <Typography>Name</Typography>
              <TextField
              id='name'
              name='name'
              fullWidth
              margin='normal'
              variant='outlined'
              className={classes.text}
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              value={values.name}
              onChange={handleChange}/>
            </Box>
            <Box className={classes.fields}>
              <Typography>Email</Typography>
              <TextField
              id='email'
              name='email'
              fullWidth
              margin='normal'
              variant='outlined'
              className={classes.text}
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}/>
            </Box>
          </Box>
          <Box className={classes.message}>
            <Typography>Message</Typography>
            <TextField
            id='message'
            name='message'
            fullWidth
            margin='normal'
            variant='outlined'
            className={classes.text}
            multiline
            rows={10}
            helperText={touched.message ? errors.message : ''}
            error={touched.message && Boolean(errors.message)}
            value={values.messsage}
            onChange={handleChange}/>
          </Box>
          {!hasSubmitted
          ? <Button type='submit' variant='contained' size='small' className={classes.button}>
              Send
            </Button>
          : <Box className={classes.success}>
              <Done className={classes.image} />
              <Typography>
                Your message has been sent, I'll get back to you soon!
              </Typography>
            </Box>}
        </form>
      )}
    </Formik>
  );
};
