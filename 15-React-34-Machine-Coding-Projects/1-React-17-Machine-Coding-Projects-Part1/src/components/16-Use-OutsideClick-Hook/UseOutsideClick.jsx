import React, { useEffect } from "react";

const useOutsideClick = (ref, handler) => {

  useEffect(() => {

    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    }

    document.addEventListener("mousedown", listener);
    // for mobile devices
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);

  return <div>useOutsideClick</div>;
};

export default useOutsideClick;
