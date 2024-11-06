import React from "react";
import Menuitem from "./Menuitem";
 

function Listitem({ list }) {
  return (
    <ul className="list-item-container">
      {list.length ? list.map((listitem) => <Menuitem item={listitem}/>) : null}
    </ul>
  );
}

export default Listitem;
