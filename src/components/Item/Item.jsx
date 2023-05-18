import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, img, name, price}) => {
  return (
      <div className="card m-2 text-center" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <Link to={`/Item/${id}`}>Ver Detalles</Link>
        </div>
      </div>
  )
}

export default Item
