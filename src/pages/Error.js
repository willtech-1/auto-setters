import React from 'react';
import { Link } from "react-router-dom"
import HeroImage from '../components/HeroImage';
import Banner from "../components/Banner"

export default function Error() {
  return (
    <HeroImage hero='carsHero'>
      <Banner title="404" subtitle="Page not found">
        <Link to='/' className='btn-primary'>return home</Link>
      </Banner>
    </HeroImage>
  )
}
