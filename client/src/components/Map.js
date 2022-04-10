// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import {
   
    Container,
   } from "react-bootstrap" 
//import withGoogleMap from 'react-google-maps/lib/withGoogleMap'

function Map (props) {
  
  // function initMap(){
  //   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkSX6_jmCQI-wyDySrrVTy6wTZC0KL7d8&libraries=places"

  //     var options ={
  //       zoom:8,
  //       center:{lat:42.3601,lng:-71.0589}
  //     }
  //     var map = new
  //     google.maps.Map(document.getElementById('map'), options);
  //   }
return(
    
        
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 45.421532, lng: -75.697189}}
      
      />
      

)
}
//const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map; 
//export WrappedMap;