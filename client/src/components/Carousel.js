import React, {useState}from 'react';
import SpotInfo from './SpotInfo';
import ImgComp from './ImgComp';
import desert from "../pics/desert.jpeg"
import monkey from "../pics/monkey.jpeg"
import sunset from "../pics/sunset.jpg"

import "./Carousel.scss"


function Carousel() {
    let slideArr =[
    <ImgComp src={desert}/>,
    <ImgComp src={monkey}/>,
    <ImgComp src={sunset}/>
    ];
    const [x, setX]= useState(0);
    const goLeft =() => {
        x === 0 ? setX(-100*(slideArr.length -1)):setX(x+100);
    };
    const goRight =() => {
        x=== -100*(slideArr.length-1)?setX(0):setX(x-100);
    };

  return (
    <div id="parent">
        <div className="slider">
            
            {slideArr.map((item, index) => {
                return (
                    <div key={index} className="slide" 
                    style={{transform:`translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            {/* <SpotInfo className="left"></SpotInfo> */}

            <button id="left" onClick={goLeft}>left</button>
            <button id="right" onClick={goRight}>right</button>
            

        </div>
    
        {/* <SpotInfo className="mover"></SpotInfo> */}
    </div>
  );
}

export default Carousel;