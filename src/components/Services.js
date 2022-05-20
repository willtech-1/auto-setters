import React, { Component } from 'react'
import { FaCarCrash } from "react-icons/fa"
import { IoCarSportSharp } from "react-icons/io5"
import { MdCarRepair } from "react-icons/md"
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs"
import Title from './Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCarCrash />,
        title: "Car Insurance",
        info: 'We know the importance of maintaining the appearance and value of your vehicle. Carefully selected products and services are offered to keep your vehicle in showroom condition for as long as possible.'
      },
      {
        icon: <BsFillFileEarmarkSpreadsheetFill />,
        title: "Finance",
        info: 'Auto Setters has finance arrangements in place with all major banks in South Africa. This allows us to help you find and secure your chosen vehicle through the best finance package option for your needs. You can apply for vehicle finance online.'
      },
      {
        icon: <MdCarRepair />,
        title: "Vehicle Check",
        info: 'When you buy a used car from Auto Setters, you buy peace of mind. Our comprehensive vehicle inspection includes a detailed check on the functional and cosmetic components of each vehicle.'
      },
      {
        icon: <IoCarSportSharp />,
        title: "Nationwide Delivery",
        info: 'All vehicles advertised are available to all branches nationally. Should a vehicle not be immediately available due to normal run of business, another vehicle will be at the branch in a short time frame.Book a test drive any vehicle.'
      },
    ]
  }
  render() {
    return (
      <section className='services'>
          <Title title='Featured Services' />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            })}
          </div>
      </section>
    )
  }
}
