import React from 'react'
import Tour from './Tour'

const Tours = ({tour,removeId}) => {
  return (
    <main>
        {tour.map((el)=>{
            return(
            <Tour key = {el.id} id={el.id} image = {el.image} info = {el.info} 
            name = {el.name} price = {el.price} removeId = {removeId} />
            )
        })}
    </main>
  )
}

export default Tours