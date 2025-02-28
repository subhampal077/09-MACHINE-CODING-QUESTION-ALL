import React, { useRef, useState } from "react";
import useOutsideClick from "./UseOutsideClick";

const UseOutSideTest = () => {
  const [showContent, setShowContent] = useState(false);

  const divRef = useRef();
  //   console.log(divRef);

  useOutsideClick(divRef, () => setShowContent(false));

  return (
    <div
      className="text-center flex items-center justify-center my-5"
      ref={divRef}
    >
      {showContent ? (
        <div className="cursor-pointer max-w-lg w-full bg-sky-200 rounded">
          <div className="p-3 border-b border-black">This is header</div>
          <div className="p-2 h-32 border-b border-black">This is body</div>
          <div className="p-3">This is footer</div>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="border border-gray-700 bg-gray-300 rounded px-2 py-1"
        >
          Show Content
        </button>
      )}
    </div>
  );
};

export default UseOutSideTest;
