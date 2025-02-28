// single selection
// multiple selection

import React, { useState } from "react";
import { data } from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // console.log(multiple);

  const handleSingleSelection = (id) => {
    id === selected ? setSelected(null) : setSelected(id);
  };

  const handleMultiSelection = (id) => {
    const existingItemIndex = multiple.findIndex((item) => item === id);

    if (existingItemIndex !== -1) {
      setMultiple(
        multiple.map((item) => {
          if (item === id) {
            return multiple.filter((el) => el !== item);
          } else {
            return item;
          }
        })
      );
    } else {
      setMultiple([...multiple, id]);
    }
  };

  return (
    <div className="flex items-center justify-center text-center">
      <div className="max-w-xl w-full my-10 p-5 ">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="px-4 py-2 font-semibold text-lg bg-gray-400 mb-4"
        >
          Enable Multi Selection
        </button>

        {data && data.length > 0 ? (
          data.map((item, i) => (
            <div key={i} className=" bg-gray-400 mb-2 flex flex-col gap-3 p-4">
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id)
                }
                className="cursor-pointer flex text-2xl items-center justify-between gap-10"
              >
                <h3>{item.question}</h3>
                <span className="font-semibold">+</span>
              </div>

              {enableMultiSelection ? (
                multiple.map((selId, i) =>
                  selId === item.id ? <p key={i}>{item.answer}</p> : null
                )
              ) : selected === item.id ? (
                <p key={i}>{item.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
