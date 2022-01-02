import React from 'react';
import '../css/homepagecss.css'
import gifimg from '../img/Fomopot_Stickers.gif'



function copy() {
  console.log(document.querySelector("#contractadd"))
var copyText = document.querySelector("#contractadd");
copyText.select();
document.execCommand("copy");
}


function Homecenter(props){
    return (
     
          <div className='container-fluid text-center'>
          
            <div className='homecen text-center'>
     
          <img  className="fomosize" src={props.img}/>
          <h5 className='text-white' style={{fontSize:"1em"}}>{props.txt}</h5> 
          <img className="fomosticker mb-4" src={gifimg} />

          <div className="row mt-5">
          <div className='col-xl-4'>
        <h5 className="text-white" style={{ marginTop:"auto",marginBottom:"auto"}}>Contract Address</h5>
          </div>
          <div className='col-xl-5'>
          <a type="button" id="contractadd"  style={{backgroundColor:"#F9BF0E",fontSize:"1em",textDecoration:"none", width:"100%", marginTop:"auto",marginBottom:"auto"}}>0x000000000000000000 </a>
          </div>
          
          <div className='col-xl-2'>
          <a type="button" onClick={() => {navigator.clipboard.writeText('0x000000000000000000')}} className="text-white btn btn-outline-warning mt-sm-2" style={{textDecoration:"none", fontSize:"1em", }}>copy</a>
          </div>
           
          </div>
           
          <div className="row mt-5 ">
          <div className='col-xl-6 mb-3 mb-sm-3'>
          <a type="button" className="text-white w-50 px-3" style={{backgroundColor:"#F9BF0E", fontSize:"1.5em",textDecoration:"none",borderRadius:"20px"}}>Dapp </a>
          </div>
          <div className='col-xl-6'>
          <a type="button" className="text-white w-50 px-3 " style={{backgroundColor:"#F9BF0E",fontSize:"1.5em",textDecoration:"none",borderRadius:"20px"}}>Chart </a>
          </div>
          </div>
          
        
           
            </div>
          
            </div>
         
        
    );
}

export default Homecenter;