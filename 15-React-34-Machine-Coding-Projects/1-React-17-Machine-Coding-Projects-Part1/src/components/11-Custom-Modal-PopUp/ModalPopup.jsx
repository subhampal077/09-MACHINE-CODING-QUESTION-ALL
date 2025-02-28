import React, { useState } from "react";
import Modal from "./Modal";

const ModalPopup = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative text-center ">
      <button
        onClick={() => setShowModal(!showModal)}
        className="mb-5 px-4 font-semibold py-1 border rounded bg-gray-400"
      >
        Open Modal Popup
      </button>

      {showModal && (
        <Modal
          /*header body footer*/ setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default ModalPopup;
