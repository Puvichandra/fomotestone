import React from 'react'
import '../css/knowyourfoundercss.css'
import kf from "../img/kyfounder.png"
import founder from "../img/founder.jpg"


function Knowfounder(){
    return (
  
 <div className="container-fluid kycard">
 <img className="kyfposition" src={kf}/>
  <div className="row rowkyf">
    <div className="col-md-11 col-sm-6 item text-center mx-auto">
      <div className="card item-card card-block ">
      
    <img className="image-cropper" src={founder} alt="Photo of sunset"/>
        <h4 className="item-card-title mt-3 mb-3">Ayush-Founder/CEO</h4>
        <p className="card-text">"Life exists of many journeys. Everyone has their own. Let me take you on mine , 
9 months ago I started mine in crypto. Like most of the beginners I had a rough start but 
the more I dived into crypto the more it excited me. This motivated me in researching different
 opportunities. Beside trading I started working with some big but also some smaller projects, this made 
me gain even more experience. Experience on all kinds of areas, trading, importance of the community
 and a healthygrowth, marketing, networking and every other aspect needed to create a successful token. 
I want people to be able to learn from my start, which was rough due to rugpulls and scams. 
My goal is to have others gain as much as I do,not just money wise,but also related to experience, crypto can be so exciting.
This made me determined to make this bsc space better one step at a time. I already took the first step by creating my own call 
group @Thattguycalls. Now I'm taking the second by creating my own project.  People need to feel that I'm standing next to them 
and I'll be there along the way while making decisions from an investors perspective rather than a developers one. I rise by lifting others."</p> 
  </div>
    </div>
    </div>
 
       
  </div>
  



          );
}

export default Knowfounder;