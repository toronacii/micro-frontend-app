import { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';

export default ({ mount, onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) {
      history.push(nextPathname);
    }
  }

  useEffect(() => {
    const { pathname: initialPath } = history.location;
    const { onParentNavigate } = mount(ref.current, { initialPath, onNavigate, onSignIn });
    return history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>
};