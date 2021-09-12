import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth-'
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>);
}