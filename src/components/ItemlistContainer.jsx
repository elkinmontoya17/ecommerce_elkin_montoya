import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

function ItemlistContainer({greeting}) {
  const [item, setItem] =useState([]);

  useEffect(() => {
    const recibirItems = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve([{id:"001", title:"Manzana", description:"El fruto rojo", price:200, pictureUrl:"https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000"}, 
        {id:"002", title:"Pera", description:"El fruto verde", price:300, pictureUrl:"https://previews.123rf.com/images/chudtsankov/chudtsankov1707/chudtsankov170700044/81667528-fruta-de-la-pera-con-dibujo-de-la-historieta-de-la-hoja-verde-dise%C3%B1o-simple-ilustraci%C3%B3n-aislada-sobr.jpg"}   ])
      }, 2000);
    });
    
    recibirItems
    .then(res => {
      setItem(res);
    })
    .catch(error => {
      console.error("Error: ", error);
    })
    
  }, [])

  console.log(item);
  return (
    <>
     <h2>{greeting}</h2>
     <ItemList items={item}/>
    </>
  )
}

export default ItemlistContainer