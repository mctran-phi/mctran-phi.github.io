import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '5vw',
  },
}));

export default useStyles;
