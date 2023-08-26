import React from 'react';

function Navbar() {
  return (
<>


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        

        
      <div className="container px-4 px-lg-8">
        

        <a className="navbar-brand" href="#!">Blogs</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-2 mb-lg-0"> 
            <li className="nav-item"><a className="nav-link px-3 active" aria-current="page" href="#!">COURSES</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link px-3 dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">LIVE CLASSES</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">CODEKATA</a></li>
                <li><a className="dropdown-item" href="#!">WEBKATA</a></li>
                <li><a className="dropdown-item" href="#!">IDE Online Compiler</a></li>
              </ul>
            </li>
            <li className="nav-item  dropdown">
              <a className="nav-link px-3 dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRACTICE</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">CODEKATA</a></li>
                <li><a className="dropdown-item" href="#!">WEBKATA</a></li>
                <li><a className="dropdown-item" href="#!">IDE Online Compiler</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link px-3 dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">RESOURCES</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">CODEKATA</a></li>
                <li><a className="dropdown-item" href="#!">WEBKATA</a></li>
                <li><a className="dropdown-item" href="#!">IDE Online Compiler</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link px-3 dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">OUR PRODUCTS</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">CODEKATA</a></li>
                <li><a className="dropdown-item" href="#!">WEBKATA</a></li>
                <li><a className="dropdown-item" href="#!">IDE Online Compiler</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;

