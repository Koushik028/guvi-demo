import React from "react"


import { Router,Route,Routes , Link} from "react-router-dom";
import FullStack from "./components/FullStack"
import DataScience from "./components/DataScience"
import CyberSec from "./components/CyberSec"
import Career from "./components/Career"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import All from "./components/All";
import Footer from "./components/Footer"






function App() {
return(
  <div className="App">
  <Navbar></Navbar>
  <Header></Header>

  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-8">
            <h3 className='navbar-toggler'>Blog Category </h3>
          <button className="navbar-toggler ms-auto mb-2 mb-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContents">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item  px-3"><Link className="nav-link active" aria-current="page" to="/">ALL</Link></li>
              <li className="nav-item px-3"><Link className="nav-link" aria-current="page" to="/full-stack-development">FULL STACK DEVELOPMENT </Link></li>
          

              <li className="nav-item  px-3"><Link className="nav-link active" aria-current="page" to="/data-science">DATA SCIENCE</Link></li>
              <li className="nav-item  px-3"><Link className="nav-link active" aria-current="page" to="/cyber-security">CYBER SECURITY</Link></li>
              <li className="nav-item  px-3"><Link className="nav-link active" aria-current="page" to="/career">CAREER</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/full-stack-development' element={<FullStack />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSec />} />
        <Route path='/career' element={<Career />} />
      </Routes>

<Footer></Footer>

    </div>
  )
}

export default App
