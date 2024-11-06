import React from 'react'
import Listitem from './Listitem'
import "./style.css"

function Treeview({menus }) {
  return (
    <div className='tree-view-container'> <Listitem list={menus}/> </div>
  )
}

export default Treeview