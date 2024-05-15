import React, { useState, useEffect, useCallback } from "react";
import Form from '../Form/Form'
import ListItem from "./ListItem/ListItem";
import './List.css'


export default function List() {

  console.log('List rendered')

  const [names, setNames] = useState([])
  useEffect(() => {
    console.log(`List did update`);
    return () => console.log(`List unmounted`);
  })

  const addName = (name) => {
    setNames((prevNames) => {
      return prevNames.concat(name)
    })
  }

  const removeName = useCallback((idToRemove) => {
    setNames((prevNames) => {
      return prevNames.filter(({ id }) => id !== idToRemove)
    })
  }, [setNames])

  return (
    <div className="list">
      <Form addName={addName} />
      <ul>
        {names.map((name) => <ListItem {...name} key={name.id} removeName={removeName} />)}
      </ul>
    </div>
  )
}