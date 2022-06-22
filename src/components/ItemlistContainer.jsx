import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

function ItemlistContainer({greeting}) {
  const [item, setItem] =useState([]);

  useEffect(() => {
    const recibirItems = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve([{id:"001", category: "fruta",title:"Manzana", description:"El fruto rojo", price:200, pictureUrl:"https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000"}, 
        {id:"002", category: "fruta", title:"Pera", description:"El fruto verde", price:300, pictureUrl:"https://previews.123rf.com/images/chudtsankov/chudtsankov1707/chudtsankov170700044/81667528-fruta-de-la-pera-con-dibujo-de-la-historieta-de-la-hoja-verde-dise%C3%B1o-simple-ilustraci%C3%B3n-aislada-sobr.jpg"},
        {id:"003", category: "fruta", title:"Fresa", description:"El fruto Rojo", price:250, pictureUrl:"https://w7.pngwing.com/pngs/693/200/png-transparent-strawberry-red-rosa-network-pink-fruit-cute-kawaii-sweet-happy-thumbnail.png"},
        {id:"004", category: "Nuez", title:"Nuez Brasil", description:"La Nuez del Metabolismo", price:440, pictureUrl:"https://nueceteria.com/wp-content/uploads/2020/10/NUECES-DE-BRASIL-1.jpg"},
        {id:"005", category: "Nuez", title:"Nuez Moscada", description:"La Nuez Cerebral", price:390, pictureUrl:"https://azulejotienda.com/517-large_default/nuez-moscada-en-pepa.jpg"},
        {id:"006", category: "Nuez", title:"Cacahuate", description:"La Nuez Multivitamínica", price:440, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx1_sJMCYNPSIFSRk9D1Ygy35vXDREJwOLg&usqp=CAU"}])
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