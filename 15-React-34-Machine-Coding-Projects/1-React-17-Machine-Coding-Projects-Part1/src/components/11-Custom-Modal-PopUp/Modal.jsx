import React from "react";

const Modal = ({ setShowModal, showModal, header, body, footer }) => {
  return (
    <div className="top-0 absolute h-screen w-full flex items-center justify-center bg-gray-300">
      <div className="w-full border border-red-600">
        <div className="relative p-4 bg-cyan-300">
          <h1 className="text-3xl font-bold">
            {header ? header : "Hello Header"}
          </h1>

          <span
            onClick={() => setShowModal(!showModal)}
            className="border h-6 w-6 flex items-center justify-center bg-red-400 rounded-md cursor-pointer text-3xl absolute top-2 right-4"
          >
            &times;
          </span>
        </div>

        <div className="p-2 h-36 bg-cyan-50">
          <p className="text-sm font-medium">{body ? body : "Hello Body"}</p>
        </div>
        <div>
          <p className="text-2xl font-semibold p-4 bg-cyan-300">
            {footer ? footer : "Hello Footer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
