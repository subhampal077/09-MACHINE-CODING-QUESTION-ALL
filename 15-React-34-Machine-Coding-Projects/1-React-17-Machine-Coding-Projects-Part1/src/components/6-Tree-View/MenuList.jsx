import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="py-3 bg-blue-400 list-disc pl-10 space-y-2">
      {list && list.length
        ? list.map((item, i) => <MenuItem key={i} item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
