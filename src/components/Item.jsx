import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
    const {id, category, title, description, price, pictureUrl} = producto

  return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">Categoria: {category}</h6>
            <p className="card-text">{description}</p>
            <Link to={`/producto/${id}`}>Ver detalle del producto</Link>
        </div>
    </div>
  )
}

export default Item