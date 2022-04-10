import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import {
   
    Container,
   } from "react-bootstrap" 
//import withGoogleMap from 'react-google-maps/lib/withGoogleMap'

function Map (props) {
  
return(
    
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 45.421532, lng: -75.697189}}
      
      />
      
)
}

export default Map; 
//export WrappedMap;