import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history'

const mount = (el, { onNavigate, createHistory = createMemoryHistory }) => {
  const history = createHistory();
  
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
  const el = document.getElementById('dev-isolated-marketing-app');
  el && mount(el, { createHistory: createBrowserHistory });
}

export { mount };