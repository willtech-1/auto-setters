import React, { Component } from "react";
import defaultBg from "../images/suzuki404.jpg";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { CarContext } from "../context";
import { StyledHero } from "../components/StyledHero";
import Contact from "../components/Contact"

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      v1: this.props.match.params.v1,
      defaultBg,
    };
  }

  static contextType = CarContext;


  render() {
    const { getCar } = this.context;
    const car = getCar(this.state.v1);
    
    if (!car) {
      return (
        <div className="error">
          <h4>Car not found...</h4>
          <Link to="/cars" className="btn-primary">
            Back to Cars
          </Link>
        </div>
      );
    }

    const {
      name,
      images,
      price,
      model,
      description,
      manual,
      delivery,
      extras,
      capacity,
    } = car;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBg}>
          <Banner title={`${name} car`}>
            <Link to="/cars" className="btn-primary">
              Back to cars
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-car">
          <div className="single-car-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-car-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price: R {price}</h6>
              <h6>Seater: {capacity}</h6>
              <h6>Model: {model}</h6>
              <h6>{manual ? "Manual" : "Automatic"}</h6>
              <h6>{delivery && "Free Delivery"}</h6>
            </article>
          </div>
        </section>
        <section className="car-extras">
          <h6>Features</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
        <section>
         <Contact />
       </section>
      </>
    );
  }
}
