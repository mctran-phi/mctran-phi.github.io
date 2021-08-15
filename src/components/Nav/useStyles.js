import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'sticky',
    top: 0,
    background: 'rgb(240, 240, 240, 0.8)',
    fontWeight: 'bold',
    borderRadius: '5px 5px 0 0',
  },
  label: {
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      color: 'rgba(65, 131, 215, 0.5)',
    },
  },
  active: {
    padding: 5,
    color: '#FFFFFF',
    cursor: 'pointer',
    borderRadius: 10,
    backgroundColor: '#111111',
  },
  image_container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    color: 'black',
  },
  resume: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
      color: 'rgba(65, 131, 215, 0.5)',
    },
  }
}));

export default useStyles;
