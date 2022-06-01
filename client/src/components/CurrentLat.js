//import { useEffect, useState } from "react"
import React from "react";


const CurrentLat = () => { 
    let lat= 48.8584;
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            lat=position.coords.latitude
          console.log(position.coords.latitude);
        })
      },[])
    

    return lat;

};

export default CurrentLat;