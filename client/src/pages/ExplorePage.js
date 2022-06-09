import React, { useEffect, useState } from 'react';
import "../images/flag-svgrepo-com.svg";
import { useMutation } from '@apollo/client';
import { ADD_SPOT } from '../utils/mutations';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Auth from '../utils/auth';
import img3 from "../images/UpdateUser.png";
import Map from "../components/Map";
import AddSpotForm from "../components/AddSpotForm";
import List from '../components/List';
import SpotDetails from '../components/SpotDetails';
import {
  Row,
  Col,
} from "react-bootstrap";

const ExplorePage = (props) => {

    const {isLoaded}= useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const[map, setMap]= useState( /** @type google.maps.GoogleMap */ (null))
    const[userLat, setUserLat]= useState();
    const[userLong, setUserLong]= useState();
    const [spots, setSpots] = useState([]);

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
            <List></List>
          </Col>
          <Col>
            <GoogleMap 
            center={{lat:userLat,lng:userLong}} 
            zoom={14} 
            mapContainerStyle={{width: "100%", height:"100%"}}
            onLoad={map=>setMap(map)}
            >
                {SpotDetails.map(spot=>(
                  <Marker
                   key={spot.id}
                   position={{
                     lat: spot.latitude,
                     lng: spot.longitude
                    }}
                    />
                ))}
            </GoogleMap>
          </Col>
        </Row>
      </div>
    );
};

export default ExplorePage;