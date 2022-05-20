import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";



const CarContext = React.createContext();

class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    type: "all",
    capacity: 4,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minModel: 0,
    maxModel: 0,
    manual: false,
  };

  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "autoSetters",
        order: "sys.createdAt"
      })
      let cars = this.formatData(response.items);
    let featuredCars = cars.filter((car) => car.featured === true);
    let maxPrice = Math.max(...cars.map((item) => item.price));
    let maxModel = Math.max(...cars.map((item) => item.model));
    this.setState({
      cars,
      featuredCars,
      sortedCars: cars,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxModel,
    });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData()
    
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let car = { ...item.fields, images, id };

      return car;
    });
    return tempItems;
  }

  getCar = (v1) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find((car) => car.v1 === v1);
    return car;
  };

  handleChange = (event) => {
   const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = event.target.name;
  


    this.setState(
      {
        [name]: value
      },
      this.filterCars
    );
  };

  filterCars = () => {
 
    let {
      cars,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minModel,
      maxModel,
      manual,
    } = this.state;

    let tempCars = [...cars];

    //change values into integer
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by type
    if(type !== 'all'){
      tempCars= tempCars.filter(car => car.type === type);
    }

    //filter by capacity
    if(capacity !== 4){
      tempCars= tempCars.filter(car => car.capacity >= capacity);
    }

    //filter by price
    tempCars= tempCars.filter(car => car.price <= price);
    
    //filter car model
    tempCars= tempCars.filter(car => car.model >= minModel && car.model <= maxModel);

    //filter manual
    if(manual){
      tempCars= tempCars.filter(car => car.manual === true);
    }

    //change state
    this.setState({
      sortedCars: tempCars
    })
  };

 
  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

const CarConsumer = CarContext.Consumer;

export { CarContext, CarProvider, CarConsumer };
