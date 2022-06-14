import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const [articulo, setArticulo] =useState({});

    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then( response => response.json())
        .then( data => setArticulo(data.results[0]))
        .catch( error => console.log(error))

    }, [])
    
    console.log(articulo)

  return (
    <>
        <ItemDetail articulo={articulo}/>
    </>
  )
}

export default ItemDetailContainer