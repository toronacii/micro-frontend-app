import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container-'
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to={'/'} />}
              <DashboardLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>);
}