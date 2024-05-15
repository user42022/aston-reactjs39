import React, {useEffect} from "react";
import './ListItem.css'

function ListItem({name, id, removeName}) {
  console.log(`ListItem name: ${name}, id: ${id} rendered`)

  useEffect(() => {
    console.log(`ListItem name: ${name}, id: ${id} did update`);
    return ()=> console.log(`ListItem name: ${name}, id: ${id} unmounted`);
  })

  const removeListItem = () => {
    removeName(id);
  }

  return (
    <li className="list-item">
      <span>{name}</span><input type="button" value="remove" onClick={removeListItem} />
    </li>
  )
}

export default React.memo(ListItem)