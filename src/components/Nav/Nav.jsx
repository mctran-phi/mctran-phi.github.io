import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import $ from 'jquery';
import Resume from '../../assets/Resume.pdf';
import useStyles from './useStyles.js';

export default function Nav({ aboutRef, projectRef, contactRef }) {
  const [value, setValue] = useState(0);
  const [label, setLabel] = useState(0);
  const [click, setClick] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener('scroll', handleValue);

    return () => {
      window.removeEventListener('scroll', handleValue)
    };
  });

  useEffect(() => {
    switch (value) {
      case 0:
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        break;
      case 1:
        $('html, body').animate({ scrollTop: aboutRef.current.offsetTop }, 'slow');
        break;
      case 2:
        $('html, body').animate({ scrollTop: projectRef.current.offsetTop }, 'slow');
        break;
      case 3:
        $('html, body').animate({ scrollTop: contactRef.current.offsetTop }, 'slow');
        break;
      default:
        break;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  const handleValue = (e) => {
    if (window.scrollY < aboutRef.current.offsetTop - 200) {
      setLabel(0);
    } else if (window.scrollY >= aboutRef.current.offsetTop - 100 && window.scrollY < projectRef.current.offsetTop - 200) {
      setLabel(1);
    } else if (window.scrollY >= contactRef.current.offsetTop - 100 || window.scrollY + $(window).height() >= $(document).height() - 100) {
      setLabel(3);
    } else if (window.scrollY >= projectRef.current.offsetTop - 100 && window.scrollY < contactRef.current.offsetTop - contactRef.current.clientHeight) {
      setLabel(2);
    }
  };

  const handleClick = (e, value) => {
    setValue(value);
    setClick(prev => !prev);
  };

  return (
    <Box pt={1} pb={1} className={classes.container}>
        <Box className={label === 0 ? classes.active : classes.label} onClick={e => handleClick(e, 0)}>
          Home
        </Box>
        <Box className={label === 1 ? classes.active : classes.label} onClick={e => handleClick(e, 1)}>
          About Me
        </Box>
        <Box className={label === 2 ? classes.active : classes.label} onClick={e => handleClick(e, 2)}>
          Project
        </Box>
        <Box className={label === 3 ? classes.active : classes.label} onClick={e => handleClick(e, 3)}>
          Contact
        </Box>
        <Box component='a' href={Resume} target='_blank' className={classes.resume}>
          Resume
        </Box>
    </Box>
  );
};
