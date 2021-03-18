import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: '#0a33fb',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
