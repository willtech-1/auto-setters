import React from "react";
import CarFilter from "./CarFilter";
import CarList from "./CarList";
import { CarConsumer } from "../context";
import Loading from "./Loading";

const CarContainer = () => {
  return (
    <CarConsumer>
      {(value) => {
        const { loading, sortedCars, cars } = value;
        if(loading){
          return <Loading />
        }

        return (
          <div>
            
            <CarFilter cars={cars} />
            <CarList cars={sortedCars} />
          </div>
        );
      }}
    </CarConsumer>
  );
};

export default CarContainer;
