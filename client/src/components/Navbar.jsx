import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bolder">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ProffessorLOGAN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Registration</a>
        </li>
        </ul>
         
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar;