import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function ItemList({items}) {
  
  

  return (
    <div className="d-flex justify-content-sm-around">
        {items.map(producto => <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList