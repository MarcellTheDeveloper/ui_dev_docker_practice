import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  section1: {
    display: 'flex',
  },
  section1Left: {
    width: '40%',
    marginLeft: '100px',
  },
  section1Right: {
    width: '60%',
  },
  headText: {
    fontSize: '8rem',
    marginTop: '-100px',
    marginBottom: '50px',
    color: '#ff3bff',
    fontWeight: '600',
    lineHeight: '140px',
  },
  mainText: {
    width: '55%',
    color: '#ffffff',
    letterSpacing: '3px',
    lineHeight: '30px',
  },
  applyButton: {
    padding: '20px',
    fontSize: '18px',
    letterSpacing: '3px',
    padding: '25px 100px 25px 100px',
    borderRadius: '50px',
    marginTop: '30px',
    marginBottom: '250px',
    backgroundColor: 'black',
    color: '#ffffff',
    fontWeight: '300',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.section1}>
      <div className={classes.section1Left}>
        <div>
          <p className={classes.headText}>Find Your Dream Job with Us</p>
        </div>
        <div>
          <p className={classes.mainText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </p>
          <div>
            <Button variant='contained' className={classes.applyButton}>
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.section1Right}></div>
    </div>
  );
};

export default HomePage;
