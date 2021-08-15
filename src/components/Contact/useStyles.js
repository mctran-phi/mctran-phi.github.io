import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    borderTop: '1px solid lightgray',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    marginRight: '5px',
  },
  link: {
    color: 'black',
  },
  email: {
    minWidth: '100px',
  },
  contact: {
    width: '50%',
    minWidth: '200px',
  },
}));

export default useStyles;
