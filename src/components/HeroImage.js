import React from 'react'

const HeroImage = ({ children, hero }) => {
  return (
    <header className={hero}>{children}</header>
  )
}

export default HeroImage