import React, { useState } from 'react'

export default function ItemCount({ initial, max, onAdd }) {

const [count, setCount] = useState(initial)

const sumar = () => {
    if (count < max) {
        setCount(count + 1)
    } else {
        alert("No puedes agregar mas productos")
    }
    
}

const restar = () => {
   count > initial ? setCount(count - 1) : alert("No puedes quitar mas prductos");
}

const reset = () => {
    setCount(initial);
}

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <button onClick={ () => {onAdd(count); reset()}}>Agregar al carrito</button>
        <button onClick={reset}>Limpiar</button>
    </div>
  )
}
