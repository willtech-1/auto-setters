import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import defaultImg from "../images/suzuki404.jpg"

const Car = ({car}) => {
  const { name, v1, images, price, model, smallInfo } = car
  return (
    <article className='car'>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="images" />
        <div className='info-sec'>
          <h6>R {price}</h6>
          <p>Year {model}</p>
          <p>{name}</p>
          <p>{smallInfo}</p>
        </div>
        <Link to={`/cars/${v1}`} className='btn-primary car-link'>Features</Link>
      </div>
    </article>
  )
}

export default Car

Car.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    v1: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}