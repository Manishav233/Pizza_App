import React from 'react';

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-md navbar-dark bg-primary shadow p-3 mb-5 bg-primary rounded">
  <a className="navbar-brand" href="#">PIZZA ZONE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>
     </ul>
  </div>
</nav>
  )
}

