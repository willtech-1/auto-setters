import React, { Component } from 'react';
import { AiFillCar } from "react-icons/ai";
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <nav className='navbar'>
        <div className="nav-center">

        <div className="nav-header">
          <Link to="/" className='logo-link'>
            <AiFillCar className='nav-logo' /> {" "}
            <span className='nav-span1'>Auto</span> {" "} <span className='nav-span2'>Setters</span>
          </Link>
          <button type="button" className='nav-btn' onClick={this.handleToggle}>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={this.state.isOpen ? 'nav-links show-nav': "nav-links"}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li><Link to='/cars'>Cars</Link></li>

        </ul>
        </div>
      </nav>
    )
  }
}
