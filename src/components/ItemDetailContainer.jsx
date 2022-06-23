import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const [articulo, setArticulo] =useState({});
    const {id} = useParams();

    /* useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then( response => response.json())
        .then( data => setArticulo(data.results[0]))
        .catch( error => console.log(error))

    }, []) */
    
    useEffect(() => {
      const recibirItems = new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve([{id:"001", category: "fruta",title:"Manzana", description:"El fruto rojo", price:200, pictureUrl:"https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000"}, 
          {id:"002", category: "frutas", title:"Pera", description:"El fruto verde", price:300, pictureUrl:"https://previews.123rf.com/images/chudtsankov/chudtsankov1707/chudtsankov170700044/81667528-fruta-de-la-pera-con-dibujo-de-la-historieta-de-la-hoja-verde-dise%C3%B1o-simple-ilustraci%C3%B3n-aislada-sobr.jpg"},
          {id:"003", category: "frutas", title:"Fresa", description:"El fruto Rojo", price:250, pictureUrl:"https://w7.pngwing.com/pngs/693/200/png-transparent-strawberry-red-rosa-network-pink-fruit-cute-kawaii-sweet-happy-thumbnail.png"},
          {id:"004", category: "nueces", title:"Nuez Brasil", description:"La Nuez del Metabolismo", price:440, pictureUrl:"https://nueceteria.com/wp-content/uploads/2020/10/NUECES-DE-BRASIL-1.jpg"},
          {id:"005", category: "nueces", title:"Nuez Moscada", description:"La Nuez Cerebral", price:390, pictureUrl:"https://azulejotienda.com/517-large_default/nuez-moscada-en-pepa.jpg"},
          {id:"006", category: "nueces", title:"Cacahuate", description:"La Nuez Multivitamínica", price:440, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx1_sJMCYNPSIFSRk9D1Ygy35vXDREJwOLg&usqp=CAU"}])
        }, 2000);
      });
      
      recibirItems
      .then(res => {
        setArticulo(res.find(prod => prod.id == id))  
      })
      .catch(error => {
        console.error("Error: ", error);
      })
      
    }, [id])

    console.log(articulo)

  return (
    <>
        {/* <ItemDetail articulo={articulo}/> */}
    </>
  )
}

export default ItemDetailContainer