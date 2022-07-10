import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <header>
          <Link to="/"><h1>Threads</h1></Link>
          <Link to="/wishlist">Wish List</Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
      </header>
  )
}

export default Header