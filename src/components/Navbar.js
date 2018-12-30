import menuItems from '../menuItems.js'
import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
  const links = [...menuItems]
    .filter(item => item.sidebar)
    .map(item => 
      <li>
        <Link to={item.path}>
          {item.text}
        </Link>
      </li>
    )

  return (
    <nav>
      <ul>
        { links }
      </ul>
    </nav>
  )
}

export default Navbar