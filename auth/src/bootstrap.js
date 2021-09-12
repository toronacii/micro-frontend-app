import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, options) => {
  const { onNavigate, initialPath, createHistory = createMemoryHistory } = options;
  const history = createHistory({
    initialEntries: [initialPath]
  });
  
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-isolated-auth-app');
  el && mount(el, { 
    initialPath: '/auth/signin',
    createHistory: createBrowserHistory 
  });
}

export { mount };