import React from 'react';
import Car from './Car'

const CarList = ({ cars }) => {
 
  if(cars.length === 0){
    return <div className="empty-search">
      <h3>Unfortunately no cars matched your parameters</h3>
    </div>
  }
  return (
    <section className="carslist">
      <div className="carslist-center">
        {
          cars.map(item => {
            return <Car key={item.id} car={item} />
          })
        }
      </div>
      {/* <h2>carsList</h2> */}
    </section>
  )
}

export default CarList