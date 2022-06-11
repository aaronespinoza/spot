import React, {useState} from "react"
import {FaStar} from "react-icons/fa";
//import SpotDetails from "./SpotDetails";

//"#e4e5e9"
const StarDisplay = () =>{

    return (
    <div>
        {[...Array(5)].map((star, i)=>{

            return(
                <>
                <label>
                    
                    <FaStar 
                    className="star" 
                    color="#ffc107"
                    size={15}
                    key={i}
                    />
                </label>
                </>
            );
        })}
    </div>
    );
};

export default StarDisplay