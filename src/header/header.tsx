import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
          <h3>
            <Link to="/planets/">
              Planets
            </Link>
          </h3>
          <ul className="d-flex">
            <li>
              <Link to="/login">Login</Link>
           </li>
           <li>
              <Link to="/secret">Secret</Link>
           </li>
          </ul>
        </div>
      )
}

export default Header