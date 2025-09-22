import React from 'react'

const PlantCard = ({title,price,image}) => {
  return (
    <div>
  
      <img width={250} height={150} src={image}/>
      <h2 className='text-xl font-medium text-primary'>{title}</h2>
      <span className='text-xl font-medium text-primary'>₹{price}</span>

    </div>
  )
}

export default PlantCard