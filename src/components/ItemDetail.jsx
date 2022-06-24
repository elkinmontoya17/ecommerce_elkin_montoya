import React from 'react'
import useState from "react"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail({articulo}) {
  const [cant, setCant] = useState(1)
  const {id} = useParams();
  
  useEffect(() => {
    


  }, [id])
  

  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={articulo.image} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">{articulo.name}</h5>
        <p className="card-text">{articulo.status}</p>
        <a href="#" className="btn btn-primary">Ver detalle del producto</a>
    </div>
</div>

  )
}

export default ItemDetail