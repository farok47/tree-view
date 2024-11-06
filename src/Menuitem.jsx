import React, { useState } from "react";
import Listitem from "./Listitem";
import {FaPlus,FaMinus} from "react-icons/fa"
 

function Menuitem({ item }) {
  const [displaycurrentchild,setdisplaycurrentchild]=useState({})

function handletoggle(getcurrentlabel){
  setdisplaycurrentchild({
   ...displaycurrentchild,[getcurrentlabel]: !displaycurrentchild[getcurrentlabel]
  })
}
console.log(displaycurrentchild)

  return (
    <li>
      <div className="    background-color: aqua
" style={{display:"flex",gap:"20px"}}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span style={{cursor:"pointer"}} onClick={()=>handletoggle(item.label)}>{
          displaycurrentchild[item.label]?<FaMinus /> :<FaPlus/>
        } </span > : null}
      </div>
      {item && item.children && item.children.length && displaycurrentchild[item.label] ? (
        <Listitem list={item.children} />
      ) : null}
    </li>
  );
}

export default Menuitem;
