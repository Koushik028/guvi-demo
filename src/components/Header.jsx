import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div className="container">
        <img className="my-3 img-fluid" src="/images/blog-header-2048x315.webp" alt="header" />
      </div>
{/* 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-8">
            <h3 className='navbar-toggler'>Blog Category </h3>
          <button className="navbar-toggler ms-auto mb-2 mb-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContents">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item  px-3"><a className="nav-link active" aria-current="page" href="#!">ALL</a></li>
              <li className="nav-item px-3"><Link className="nav-link" aria-current="page">FULL STACK DEVELOPMENT </Link></li>
          

              <li className="nav-item  px-3"><a className="nav-link active" aria-current="page" href="#!">DATA SCIENCE</a></li>
              <li className="nav-item  px-3"><a className="nav-link active" aria-current="page" href="#!">CYBER SECURITY</a></li>
              <li className="nav-item  px-3"><a className="nav-link active" aria-current="page" href="#!">CAREER</a></li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Header;