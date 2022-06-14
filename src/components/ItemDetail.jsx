import React from 'react'

function ItemDetail({articulo}) {


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