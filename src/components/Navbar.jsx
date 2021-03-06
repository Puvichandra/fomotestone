import React , {useState} from 'react';
import fomologo from "../img/fomologo.png";
import '../css/navbarcss.css';




function NavbarOne(){
return (
<nav id="navid" className="navbar navbar-expand-xl navbar-light  fixed-top">
  <div className="container-fluid mx-5 mt-3">
    {/* <a className="navbar-brand ms-5 "  href="#" >Navbar</a> */}
    <img src={fomologo} className="fomologo"></img>
    <button className="navbar-toggler"style={{background:"linear-gradient(61deg, rgba(232,230,23,1) 0%, rgba(84,13,176,1) 35%, rgba(85,0,255,1) 100%)"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#howto">How To Buy</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#tok">Tokenomics</a>
        </li>
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#roadmap">Roadmap</a>
        </li>
       
        <li className="nav-item ${nav-it}">
          <a className="nav-link text-white" href="#">Team</a>
        </li>

        <a  type='button' className="text-white px-3 my-2 mx-2" style={{ backgroundColor:'#693594', borderRadius:'25px',  fontSize:"1.5em", textDecoration:'none' }}>
            Buy Now
        </a>
       
       
      </ul>
 
    </div>
  </div>
</nav>
);


}

export default NavbarOne;