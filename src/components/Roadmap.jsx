import React from 'react'
import '../css/roadmapcss.css'
import roadmappng from "../img/roadmap.png"


function Roadmap(){
    return (
        
             <div className="container-fluid reveal fade-left" style={{marginLeft:"auto",marginRight:"auto"}}>
            <img className="roadmapposition" src={roadmappng}/>
             </div>
         
    );
}

export default Roadmap;