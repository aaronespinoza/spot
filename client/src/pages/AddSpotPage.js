import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Auth from '../utils/auth';
import img3 from "../images/UpdateUser.png";
import Map from "../components/Map";
import AddSpotForm from "../components/AddSpotForm";
import {
  Row,
  Col,
} from "react-bootstrap";

const AddSpotPage = (props) => {

    const {isLoaded}= useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const[map, setMap]= useState( /** @type google.maps.GoogleMap */ (null))
    const[userLat, setUserLat]= useState();
    const[userLong, setUserLong]= useState();

    //Finds users location

    useEffect(()=> {
      navigator.geolocation.getCurrentPosition(position =>{
        setUserLat(position.coords.latitude);
        setUserLong(position.coords.longitude);
        console.log(userLat, userLong);
      })
    },[]);

    if(!isLoaded){
     return <div value="loading"/>
    }
    return (
      <div>
        <Row>
          <Col>
            <AddSpotForm></AddSpotForm>
          </Col>
          <Col>
            <GoogleMap 
            center={{lat:userLat,lng:userLong}} 
            zoom={15} 
            mapContainerStyle={{width: "100%", height:"100%"}}
            onLoad={map=>setMap(map)}
            >
            </GoogleMap>
          </Col>
        </Row>
      </div>
    );
};

export default AddSpotPage;