import { useRef, useEffect } from "react";

export default ({ mount }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [ref.current]);

  return <div ref={ref}></div>
};