import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  components: {
    width: '80vw',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  portfolio: {
    backgroundColor: '#DDDDDD',
    borderRadius: '0 0 5px 5px',
  },
}));

export default useStyles;
