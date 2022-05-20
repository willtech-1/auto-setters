import React from "react";
import { useContext } from "react";
import { CarContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const CarFilter = ({ cars }) => {
  const context = useContext(CarContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minModel,
    maxModel,
    manual,
  } = context;

  //get unique brands
  let types = getUnique(cars, "type");

  //get all
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(cars, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search cars" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Car brand</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Seater</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price R {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minModel"
              id="model"
              value={minModel}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxModel"
              id="model"
              value={maxModel}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="manual"
              id="manual"
              checked={manual}
              onChange={handleChange}
            />
            <label htmlFor="manual">Automatic</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CarFilter;
