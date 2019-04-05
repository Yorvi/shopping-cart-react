import React from 'react';

const NavBar = ({ totalCounters }) => {
  return ( 
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        React Shopping Cart <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}
 
export default NavBar;