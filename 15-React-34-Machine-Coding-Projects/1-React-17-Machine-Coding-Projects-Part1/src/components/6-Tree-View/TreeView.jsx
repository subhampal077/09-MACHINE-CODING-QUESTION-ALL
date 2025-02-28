import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import menusData from "./data";

const TreeView = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(menusData);
  }, []);

  return (
    <div className="my-10">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
