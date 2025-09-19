import React from 'react'

const PlantCard = ({title,price,image}) => {
  return (
    <div>
  
      <img width={248} height={341} src={image}/>
      <h2>{title}</h2>
      <span>₹{price}</span>

    </div>
  )
}

export default PlantCard