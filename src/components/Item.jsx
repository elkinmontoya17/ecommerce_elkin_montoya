import React from 'react'

function Item({producto}) {
    const {id, title, description, price, pictureUrl} = producto

  return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Ver detalle del producto</a>
        </div>
    </div>
  )
}

export default Item