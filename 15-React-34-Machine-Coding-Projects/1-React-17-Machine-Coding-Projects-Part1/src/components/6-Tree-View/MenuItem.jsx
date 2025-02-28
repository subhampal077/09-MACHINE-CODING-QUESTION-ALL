import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
//   console.log(item);

  const [displayChildren, setDisplayChildren] = useState(false);

  return (
    <li>
      <p className="text-xl py-2">
        {item.label}
        {item?.children?.length > 0 ? (
          <span
            onClick={() => setDisplayChildren(!displayChildren)}
            className="cursor-pointer ml-5"
          >
            {displayChildren ? "✖︎" : "☰"}
          </span>
        ) : (
          ""
        )}
      </p>

      {displayChildren === false ? (
        ""
      ) : item?.children?.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
