import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
  fields_container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    minWidth: '200px',
  },
  fields: {
    flexGrow: 1,
    width: '45%',
    minWidth: '200px',
  },
  message: {
    width: '100%',
    minWidth: '200px',
  },
  text: {
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    },
    '&:active': {
      transform: 'translateY(2px)',
    }
  },
  success: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#2ECC40',
  },
  image: {
    marginRight: 10,
    color: 'white',
    backgroundColor: '#2ECC40',
    border: '1px solid #2ECC40',
    borderRadius: 20,
  }
}));

export default useStyles;
