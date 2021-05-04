import { Container, makeStyles } from '@material-ui/core';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Send from './pages/send';
import Done from './pages/done';
import './App.css';

import AppState from './context/background/AppState';

const useStyles = makeStyles({
  app: {
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    maxWidth: '450px',
    minHeight: '600px',
    backgroundColor: '#ffff',
    boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px'
  }
});
const App = () => {
  const classes = useStyles();

  return (
    <AppState>
      <Router>
        <Container maxWidth="md" className={classes.app} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/send" component={Send} />
            <Route exact path="/done" component={Done} />
          </Switch>
        </Container>
      </Router>
    </AppState>
  );
};

export default App;
