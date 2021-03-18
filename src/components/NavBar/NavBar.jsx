import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  MenuIcon: {
    fill: '#ffffff',
    margin: '30px',
    padding: '20px',
    fontSize: '4.5rem',
    borderRadius: '90px',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      <MenuIcon
        className={classes.MenuIcon}
        style={{ backgroundColor: 'black' }}
      />
    </div>
  );
};

export default NavBar;
