import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    borderTop: '1px solid lightgray',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  projects: {

  },
  projectTitle: {
    fontWeight: 'bold',
  },
  projectOne: {
    borderRight: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
  },
  projectTwo: {
    borderLeft: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
  },
  projectThree: {
    borderRight: '1px solid lightgray',
  },
  projectFour: {
    borderLeft: '1px solid lightgray',
  },
  image: {
    width: '30vw',
    height: '20vw',
    border: '0.5px solid gray',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    padding: 5,
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    },
    '&:active': {
      transform: 'translateY(2px)',
    }
  },
}));

export default useStyles;
