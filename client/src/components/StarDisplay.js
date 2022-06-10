import React, {useState} from "react"
import {FaStar} from "react-icons/fa";
//import SpotDetails from "./SpotDetails";

//"#e4e5e9"
const StarDisplay = () =>{
    // const [rating, setRating]= useState(null);
    // //const [hover, setHover]= useState(null);

    // setRating(rating);{
    //     rating=SpotDetails[0].rating
    // };

    return (
    <div>
        {[...Array(5)].map((star, i)=>{
            //const ratingValue= i+ 1;

            return(
                <>
                <label>
                    {/* <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue}
                    key={i}
                    onClick={()=> setRating(ratingValue)}
                    /> */}
                    <FaStar 
                    className="star" 
                    color="#ffc107"
                    size={15}
                    key={i}
                    // onMouseEnter={()=> setHover(ratingValue)}
                    // onMouseLeave={()=> setHover(null)}
                    />
                </label>
                </>
            );
        })}
    </div>
    );
};

export default StarDisplay