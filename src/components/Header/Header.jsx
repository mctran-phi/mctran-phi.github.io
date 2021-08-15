import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import useStyles from './useStyles.js';

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <motion.div
      className={classes.container}
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1,
        transition: {
        type: "spring",
        stiffness: 150,
        damping: 50
        }
      }}>
        <Typography className={classes.header}>
          Minh Tran
        </Typography>
        <Typography className={classes.header}>
          Fullstack Software Engineer
        </Typography>
      </motion.div>
    </Box>
  );
};
