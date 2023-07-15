import { useEffect } from "react";

const ScrollRestWrap = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{props.children}</div>;
};
export default ScrollRestWrap;
