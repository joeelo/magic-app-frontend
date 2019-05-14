import React from 'react'
import MTGCard from "./mtgCard"

const cardContainer = (props) => {
  console.log(props);
  return (
    <div> 
      <button onClick={props.changeVisible}> I'm a button </button>
      <MTGCard /> 
    </div>
  )
}
export default cardContainer
